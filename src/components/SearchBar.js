import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={
      searchPhrase: "",
    }
  }
  handleSearchUpdate(evt){
    this.setState({
      searchPhrase: evt.target.value,
    })
  }
  onSubmit(e){
    e.preventDefault();
    this.props.onNoteSearch(this.state.searchPhrase);
    this.setState({
      searchPhrase: "",
    })
  }
  render(){
    return (
    <div className='search-bar'>
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.searchPhrase} placeholder="Search..." onChange={(e)=> {this.handleSearchUpdate(e)}}/>
        <input type="submit" value="Search"/>
      </form>
      <button type="submit" onClick={this.props.cancelSearch} value="Cancel Search">Cancel Search</button>
    </div>
  )
  }
}
export default SearchBar;
