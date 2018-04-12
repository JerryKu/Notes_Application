import React, { Component } from 'react';
import Note from './Note.js';

class AddNote extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e){
    e.preventDefault();
    console.log("note added");
    this.props.onAdd();
  }
  render() {
    return (
      <div className="add-note">
        <form onSubmit={this.onSubmit}>
          <input type="submit" value="Add New Note" />
        </form>
      </div>
    )
  }
}

export default AddNote;
