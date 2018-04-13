import React from 'react';
import SearchBar from './components/SearchBar.js';
import NoteList from './components/NoteList.js';
import styles from './App.css';
import NoteView from './components/NoteView.js'
import AddNote from './components/AddNote.js'

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
    this.state = {
      notes: props.initialNotes,
      display: props.initialNotes,
      currentNote: props.initialNotes[0],

    }
  }
  onNoteAdd(username, title){
    this.setState(function(prevState, props){
      const newArray = prevState.notes.concat({
        title: title,
        author: username,
        content: "",
        key:nextId
      })
      console.log(newArray);
      return{
        notes: newArray,
        display: newArray
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
  onNoteDelete(index){
    console.log(index);
    this.setState(function(prevState, props){
      prevState.notes.splice(index,1)
      return{
        notes: prevState.notes,
        display: this.state.notes
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
    console.log(input);
    const searchArray = this.state.notes.filter(
      function(note){
        //console.log(note.content.indexOf(input));
          return note.content.indexOf(input) > -1;
      }
    )
    console.log(searchArray)
    this.setState({
        display: searchArray,
      })
    }
  cancelSearch(){
    this.setState({
      display: this.state.notes,
    })
  }
  render(){
    return(
      <div className='application'>
        <div className='container'>
          <div className='note-area'>
            <SearchBar onNoteSearch={this.onNoteSearch} cancelSearch={this.cancelSearch}/>
            <NoteList notes={this.state.display} onNoteClick={this.onNoteClick} onNoteDelete={this.onNoteDelete}/>
            <AddNote onAdd={this.onNoteAdd} />
          </div>
          <NoteView currentNote={this.state.currentNote} onNoteChange={this.onNoteChange}/>
        </div>
      </div>
      )
  }
}

export default App;
