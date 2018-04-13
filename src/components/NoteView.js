import React, { Component } from 'react';

class NoteView extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="note-view">
        {this.props.currentNote.title}
        <br/>
        <br/>
        <div><textarea rows='10' cols='100' name="content" className="note-content" value={this.props.currentNote.content} onChange={(e)=>{this.props.onNoteChange(e)}}/></div>
      </div>
    );
  }

}

export default NoteView;