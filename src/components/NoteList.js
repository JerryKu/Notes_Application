import React, { Component } from 'react';
import Note from './Note.js';

class NoteList extends Component {
  render() {
    return (
      <div className="note-list">
        {this.props.notes.map(function(note, index){
          return <div onClick={(e) => {this.props.onNoteClick(note)}} key={note.key}><Note key={note.key} title={note.title} content={note.content} author={note.author} onDelete={(e) => {this.props.onNoteDelete(index, e)}}/></div>
        }.bind(this))}
      </div>
    );
  }

}

export default NoteList;
