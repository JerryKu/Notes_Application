import React, { Component } from 'react';

class NoteView extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   noteDisplayed: this.props.noteDisplayed
    // }
  }
  render() {
    const updateButton = this.props.noteDisplayed ? (<input type="submit" value="Update"/>) : (<div></div>)
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
