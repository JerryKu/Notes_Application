import React from 'react';
import SearchBar from './components/SearchBar.js';
import NoteList from './components/NoteList.js';
import styles from './App.css';
import NoteView from './components/NoteView.js'
import AddNote from './components/AddNote.js'

var nextId = 4;
class App extends React.Component {
  constructor(){
    super();
  }
  onNoteAdd(){
    this.state.notes.push({
      title: "Title",
      author: "Author",
      content: "Note Note Note Note Note Note Note",
      id: nextId
    });
    this.setState(this.state);
    nextId++;
  }
  render(){
    return(
      <div className='application'>
        <div className='container'>
          <div className='note-area'>
            <SearchBar />
            <NoteList notes={this.props.initialNotes}/>
            <AddNote onAdd={this.onNoteAdd} />
          </div>
          <NoteView />
        </div>
      </div>
      )
  }
}

export default App;
