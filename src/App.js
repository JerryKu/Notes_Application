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
      topics: props.initialTopics,
      currentNote: {},

    }
  }
  componentDidMount(){
    axios.get('/notes', ).then((response)=> this.setState({displayedNotes: response.data}))
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
      this.setState(function(prevState, props){
        const newTopics = prevState.topics.concat(topic);
        return {
          topics: newTopics,
        }
      })
    }
  }
  //Create a new note given title, user, and topic.
  onNoteAdd(username, title, textValue, selectedTopic){
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
  onNoteDelete(index, evt){
    //stopPropagation to stop Note's onClick handler
    evt.stopPropagation()
    let currentNote = this.state.currentNote;
    if(this.state.currentNote.key === this.state.notes[index].key){
      currentNote = {
        title: "",
        author: "",
        content: "",
        key: ""
      }
    }
    this.setState(function(prevState, props){
      prevState.notes.splice(index,1)
      return{
        notes: prevState.notes,
        displayedNotes: this.state.notes,
        currentNote: currentNote
      }
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
