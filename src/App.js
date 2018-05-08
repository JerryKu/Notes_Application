import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar.js';
import NoteList from './components/NoteList.js';
import './App.css';
import NoteView from './components/NoteView.js'
import AddNote from './components/AddNote.js'
import Topics from './components/Topics.js'

//unique Key for note elements
var nextId = 5;
class App extends React.Component {
  constructor(props){
    super(props);
    //functions are passed around to different components, need to bind this.
    this.onNoteAdd = this.onNoteAdd.bind(this);
    this.onNoteClick = this.onNoteClick.bind(this);
    this.onNoteDelete = this.onNoteDelete.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onNoteSearch = this.onNoteSearch.bind(this);
    this.cancelSearch = this.cancelSearch.bind(this);
    this.onTopicSelect = this.onTopicSelect.bind(this);
    this.onAddTopic = this.onAddTopic.bind(this);
    //initial state of application altered by setState()
    this.state = {
      notes: [],
      displayedNotes: [],
      topics: [],
      currentNote: {},

    }
  }
  componentDidMount(){
    axios.get('http://localhost:8000/notes', {port: 8000})
    .then((response)=> {
      this.setState(
      {
        notes: response.data,
        displayedNotes: response.data
      }
    )})
    .catch((err)=>console.log(err));

    axios.get('http://localhost:8000/topics', {port: 8000})
    .then((response)=>{
      let topicArray = [];
      response.data.forEach((topic)=>{
        topicArray.push(topic.topic);
      })
      this.setState({topics: topicArray})
    }
  )
    .catch((err)=>console.log(err))
  }
  //Clicking a topic displays all notes from a certain topic.
  onTopicSelect(topic){
    let topicArray = this.state.notes;
    if(topic !== "All"){
      topicArray = this.state.notes.filter(
        function(note){
            return note.topic === topic;
        }
      )
    }
    this.setState({
      displayedNotes: topicArray,
    })
  }
  //Create new topic.
  onAddTopic(topic){
    if(this.state.topics.indexOf(topic) === -1){
      axios.post('http://localhost:8000/topics', {
        topic: topic
      }).then((response)=>{
        this.setState(function(prevState, props){
          const newTopics = prevState.topics.concat(topic);
          return{
            topics: newTopics,
          }
        })
      }).catch((err)=>{
        alert("error adding topic");
      })
    }
  }
  //Create a new note given title, user, and topic.
  onNoteAdd(username, title, textValue, selectedTopic){
    axios.post('http://localhost:8000/notes', {
      author: username,
      title: title,
      content: textValue,
      topic: selectedTopic
    })
    this.setState(function(prevState, props){
      const newArray = prevState.notes.concat({
        title: title,
        author: username,
        content: textValue,
        topic: selectedTopic,
        key:nextId
      })
      return{
        notes: newArray,
        displayedNotes: newArray
      }
    })
    nextId++;
  }
  //Display Note clicked on right side.
  onNoteClick(note){
    this.setState(function(prevState, props){
      return{
        currentNote: note
      }
    })
  }
  //Note Delete Function passed down to NoteList passed down to Note
  onNoteDelete(evt,delete_id){
    //stopPropagation to stop Note's onClick handler
    evt.stopPropagation()
    axios.delete('http://localhost:8000/notes/' + delete_id)
    .then((response)=>{
      let currentNote = this.state.currentNote;
      if(this.state.currentNote._id === delete_id){
        currentNote = {
          title: "",
          author: "",
          content: "",
          key: ""
        }
      }
      this.setState(function(prevState, props){
        for(let i = prevState.notes.length-1; i >= 0 ; i--){
          if(prevState.notes[i]._id === delete_id){
            prevState.notes.splice(i,1);
            break;
          }
        }
        return{
          notes: prevState.notes,
          displayedNotes: prevState.notes,
          currentNote: currentNote
        }
      })
    })
    .catch((err)=>{
      alert("something went wrong");
    })

  }
  //Handles when notes are editted in the Note View.
  onNoteChange(event){
    const update = event.target.value;
    this.setState(function(prevState, props){
      prevState.currentNote.content = update;
      return {
        currentNote: prevState.currentNote,
      }
    })
  }
  //searches for words in the notes contents and displayed all notes with given word.
  onNoteSearch(input){
    const searchArray = this.state.notes.filter(
      function(note){
          return note.content.toLowerCase().indexOf(input.toLowerCase()) > -1;
      }
    )
    this.setState({
        displayedNotes: searchArray,
      })
  }
  //Used to cancel search and display all notes
  cancelSearch(){
    this.setState({
      displayedNotes: this.state.notes,
    })
  }

  render(){
    return(
      <div className='application'>
        <div className='container'>
          <div className="topics-area">
            <Topics topics = {this.state.topics} onTopicSelect={this.onTopicSelect} onAddTopic ={this.onAddTopic}/>
          </div>
          <div className='note-area'>
            <SearchBar onNoteSearch={this.onNoteSearch} cancelSearch={this.cancelSearch}/>
            <NoteList notes={this.state.displayedNotes} onNoteClick={this.onNoteClick} onNoteDelete={this.onNoteDelete}/>
            <AddNote onAdd={this.onNoteAdd} topics={this.state.topics}/>
          </div>
          <div className="note-view">
            <NoteView currentNote={this.state.currentNote} onNoteChange={this.onNoteChange}/>
          </div>
        </div>
      </div>
      )
  }
}

export default App;
