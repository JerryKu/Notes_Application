import React, { Component } from 'react';

class Note extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="note">
        <span>{this.props.title}</span>
        &nbsp;
         -
        &nbsp;
        <span>{this.props.author}</span>
        <span className="delete">delete</span>
        <span className="edit">edit</span>
      </div>
    );
  }

}

export default Note;
