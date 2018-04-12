import React, { Component } from 'react';

class NoteView extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="note-view">
        {this.props.currentNote.title} <br/>
        <br/>
        {this.props.currentNote.content}
      </div>
    );
  }

}

export default NoteView;
