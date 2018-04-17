import React, { Component } from 'react';

class AddTopic extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      topic: "",
    }
  }
  handleChange(e){
    this.setState({
      topic: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    this.props.onAddTopic(this.state.topic);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.topic} onChange={this.handleChange}/>
          <input type="submit" value="Add Topic"/>
        </form>
      </div>
    );
  }

}

export default AddTopic;
