import React, { Component } from 'react';
import Note from './Note.js';

class AddNote extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state ={
      username: "",
      title: "",
    }
  }
  onSubmit(e){
    e.preventDefault();
    console.log("note added");
    this.props.onAdd(this.state.username, this.state.title);
    this.setState({
      username: "",
      title: "",
    })
  }
  handleNameUpdate(evt){
    this.setState({
      username: evt.target.value
    })
    //console.log(evt.target.value)
  }
  handleTitleUpdate(evt){
    this.setState({
      title: evt.target.value
    })
    //console.log(evt.target.value)
  }
  render() {
    return (
      <div className="add-note">
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="username" value={this.state.username} onChange={(e)=>{this.handleNameUpdate(e)}}/>
          <input type="text" placeholder="title" value={this.state.title} onChange={(e)=>{this.handleTitleUpdate(e)}}/>
          <input type="submit" value="Add New Note" />
        </form>
      </div>
    )
  }
}

export default AddNote;
