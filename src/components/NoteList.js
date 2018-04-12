import React, { Component } from 'react';
import Note from './Note.js';
import AddNote from './AddNote.js';

class NoteList extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="note-list">
        {this.props.notes.map(function(note){
          return <Note title={note.title} content ={note.content} author={note.author} key={note.key}/>
        }.bind(this))}
      </div>
    );
  }

}

export default NoteList;
