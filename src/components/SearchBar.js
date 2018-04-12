import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(){
    super();
  }
  render(){
    return (
    <div className='search-bar'>
      <input type="text" placeholder="Search..."/>
      <input type="submit" value="Submit"/>
    </div>
  )
  }
}
export default SearchBar;
