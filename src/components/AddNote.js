import React, { Component } from 'react';
import Note from './Note.js';
import { Form, Text } from 'react-form';


class AddNote extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state ={
      username: "",
      title: "",
      textValue: "",
    }
  }
  onSubmit(e){
    e.preventDefault();
    console.log("note added");
    if(!this.state.username==="" && !this.state.title==="" && !this.state.textValue===""){
      this.props.onAdd(this.state.username, this.state.title, this.state.textValue);
    }
    this.setState({
      username: "",
      title: "",
      textValue: ""
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
  handleTextUpdate(evt){
    this.setState({
      textValue: evt.target.value
    })
  }
  render() {
    return (
      <div className="add-note">
          <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="username" value={this.state.username} onChange={(e)=>{this.handleNameUpdate(e)}}/>
            <input type="text" placeholder="title" value={this.state.title} onChange={(e)=>{this.handleTitleUpdate(e)}}/>
            <textarea rows='10' cols='100' value={this.state.textValue} onChange={(e)=>{this.handleTextUpdate(e)}}/>
            <input type="submit" value="Add New Note" />
          </form>
      </div>
    )
  }
}

export default AddNote;
