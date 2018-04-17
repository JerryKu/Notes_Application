import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const TOPICS = [
  "All", "Math", "Science", "English", "Misc."
]
const NOTES = [
  {
    title: "Note1",
    author: "Jerry",
    content: "Note1 Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note",
    topic: "Math",
    key: 0
  },
  {
    title: "Note2",
    author: "Serena",
    content: "Note2 Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note",
    topic: "Science",
    key: 1
  },
  {
    title: "Note3",
    author: "Brandon",
    content: "Note3 Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note",
    topic: "English",
    key: 2
  },
  {
    title: "Note4",
    author: "Jon",
    content: "Note4 Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note",
    topic: "Misc.",
    key: 3
  },
  {
    title: "Note5",
    author: "Jon2",
    content: "Note5 Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note",
    topic: "Misc.",
    key: 4
  }
]

ReactDOM.render(<App initialNotes ={NOTES} initialTopics = {TOPICS}/>, document.getElementById('root'));
