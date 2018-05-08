import React, { Component } from 'react';

class NoteView extends Component {

  render() {
    const updateButton = this.props.noteDisplayed ? (<div className="update-button"><button onClick={(e)=>{this.props.onNoteUpdate(this.props.currentNote._id)}}>Update</button></div>) : (<div></div>)
    return (
      <div>
        <div className="note-title">{this.props.currentNote.title}</div>
        <div><textarea name="content" className="note-content" value={this.props.currentNote.content} onChange={(e)=>{this.props.onNoteChange(e)}}/></div>
        {updateButton}
      </div>
    );
  }
}

export default NoteView;
