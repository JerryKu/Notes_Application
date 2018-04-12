import React, { Component } from 'react';
import Note from './Note.js';

class AddNote extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="add-note">
        <input type="submit" value="Add New Note" />
      </div>
    );
  }

  onSubmit(e){
    e.preventDefault();
    this.props.onAdd();
  }
}

export default AddNote;
