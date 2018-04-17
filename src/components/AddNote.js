import React, { Component } from 'react';


class AddNote extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state ={
      username: "",
      title: "",
      textValue: "",
      selectedTopic: "All"
    }
  }
  onSubmit(e){
    e.preventDefault();
    if(this.state.username !== "" && this.state.title !== "" && this.state.textValue !== ""){
      console.log("note added");
      this.props.onAdd(this.state.username, this.state.title, this.state.textValue);
      this.setState({
        username: "",
        title: "",
        textValue: ""
      });
    }else{
      this.setState({
        username: "",
        title: "",
        textValue: "Please fill in all fields."
      })
    }
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
            <select>
              <option>Topic</option>
              {this.props.topics.map(function(topic,index){
                return <option value={topic}>{topic}</option>
              })}

            </select>
            <textarea rows='10' cols='100' value={this.state.textValue} onChange={(e)=>{this.handleTextUpdate(e)}}/>
            <input type="submit" value="Add New Note" />
          </form>
      </div>
    )
  }
}

export default AddNote;
