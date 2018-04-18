import React, { Component } from 'react';
import AddTopic from './AddTopic.js'
class Topics extends Component {

  render() {
    return (
      <div>
        <div className="topic-header"><strong> Topics: </strong></div>
        {this.props.topics.map(function(topic, index){
          return <div key={index} className="topics" onClick={(e)=>{this.props.onTopicSelect(topic)}}>{topic}</div>
        }.bind(this))
        }
        <AddTopic onAddTopic={this.props.onAddTopic}/>
    </div>
    );
  }

}

export default Topics;
