import React, { Component } from 'react';

class NoteView extends Component {

  render() {
    return (
      <div>
        {this.props.currentNote.title}
        <br/>
        <br/>
        <div><textarea name="content" className="note-content" value={this.props.currentNote.content} onChange={(e)=>{this.props.onNoteChange(e)}}/></div>
      </div>
    );
  }

}

export default NoteView;
