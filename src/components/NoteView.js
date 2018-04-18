import React, { Component } from 'react';

class NoteView extends Component {
  render() {
    return (
      <div>
        <div className="note-title">{this.props.currentNote.title}</div>
        <div><textarea name="content" className="note-content" value={this.props.currentNote.content} onChange={(e)=>{this.props.onNoteChange(e)}}/></div>
      </div>
    );
  }
}

export default NoteView;
