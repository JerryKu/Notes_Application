import React from 'react';
import SearchBar from './components/SearchBar.js';
import NoteList from './components/NoteList.js';
import './App.css';
import NoteView from './components/NoteView.js'
import AddNote from './components/AddNote.js'
import Topics from './components/Topics.js'

var nextId = 4;
class App extends React.Component {
  constructor(props){
    super(props);
    this.onNoteAdd = this.onNoteAdd.bind(this);
    this.onNoteClick = this.onNoteClick.bind(this);
    this.onNoteDelete = this.onNoteDelete.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onNoteSearch = this.onNoteSearch.bind(this);
    this.cancelSearch = this.cancelSearch.bind(this);
    this.onTopicSelect = this.onTopicSelect.bind(this);
    this.onAddTopic = this.onAddTopic.bind(this);

    this.state = {
      notes: props.initialNotes,
      displayedNotes: props.initialNotes,
      topics: props.initialTopics,
      currentNote: {},

    }
  }
  onTopicSelect(topic){
    let topicArray = this.state.notes;
    if(topic !== "All"){
      topicArray = this.state.notes.filter(
        function(note){
          //console.log(note.content.indexOf(input));
            return note.topic === topic;
        }
      )
    }
    this.setState({
      displayedNotes: topicArray,
    })
  }
  onAddTopic(topic){
    this.setState(function(prevState, props){
      const newTopics = prevState.topics.concat(topic);
      return {
        topics: newTopics,
      }
    })
  }
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
  onNoteChange(event){
    const update = event.target.value;
    this.setState(function(prevState, props){
      prevState.currentNote.content = update;
      return {
        currentNote: prevState.currentNote,
      }
    }

    )
  }
  onNoteSearch(input){
    const searchArray = this.state.notes.filter(
      function(note){
        //console.log(note.content.indexOf(input));
          return note.content.toLowerCase().indexOf(input.toLowerCase()) > -1;
      }
    )
    this.setState({
        displayedNotes: searchArray,
      })
    }
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
