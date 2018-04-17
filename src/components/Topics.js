import React, { Component } from 'react';
import AddTopic from './AddTopic.js'
class Topics extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        Topics:
        {this.props.topics.map(function(topic, index){
          return <div className="topics" onClick={(e)=>{this.props.onTopicSelect(topic)}}>{topic}</div>
        }.bind(this))
        }
        <AddTopic onAddTopic={this.props.onAddTopic}/>
    </div>
    );
  }

}

export default Topics;
