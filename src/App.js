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
    this.state = {
      notes: props.initialNotes,
    }
  }
  onNoteAdd(){
    this.setState(function(prevState, props){
      const newArray = prevState.notes.concat({
        title: "Note5",
        author: "Jon",
        content: "Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note",
        key:nextId
      })
      console.log(newArray);
      return{
        notes: newArray,
      }
    })
    nextId++;
  }
  render(){
    return(
      <div className='application'>
        <div className='container'>
          <div className='note-area'>
            <SearchBar />
            <NoteList notes={this.state.notes}/>
            <AddNote onAdd={this.onNoteAdd} />
          </div>
          <NoteView />
        </div>
      </div>
      )
  }
}

export default App;
