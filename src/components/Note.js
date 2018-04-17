import React, { Component } from 'react';

class Note extends Component {

  render() {
    return (
      <div className="note">
        <span>{this.props.title}</span>
        &nbsp;
         -
        &nbsp;
        <span>{this.props.author}</span>
        <span onClick={(e) => {this.props.onDelete(e)}} className="delete">X</span>
      </div>
    );
  }

}

export default Note;
