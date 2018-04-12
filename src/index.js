import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const NOTES = [
  {
    title: "Note1",
    author: "Jerry",
    content: "Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note",
    key: 0
  },
  {
    title: "Note2",
    author: "Serena",
    content: "Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note",
    key: 1
  },
  {
    title: "Note3",
    author: "Brandon",
    content: "Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note",
    key: 2
  },
  {
    title: "Note4",
    author: "Jon",
    content: "Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note",
    key: 3
  },
  {
    title: "Note5",
    author: "Jon2",
    content: "Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note",
    key: 4
  }
]

ReactDOM.render(<App initialNotes ={NOTES}/>, document.getElementById('root'));
registerServiceWorker();
