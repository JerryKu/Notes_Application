import React, { Component } from 'react';
import Note from './Note.js';

class NoteList extends Component {
  render() {
    return (
      <div className="note-list">
        {this.props.notes.map(function(note, index){
          return <div onClick={(e) => {this.props.onNoteClick(note)}} key={note._id}><Note key={note._id} title={note.title} content={note.content} author={note.author} onDelete={(evt) => {this.props.onNoteDelete(evt,note._id)}}/></div>
        }.bind(this))}
      </div>
    );
  }

}

export default NoteList;
