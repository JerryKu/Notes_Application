import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Preload Topics and Notes later to be stored in LocalStorage or DB
const TOPICS = [
  "All", "Hash Tables", "Arrays", "Linked Lists", "Misc."
]
const NOTES = [
  {
    title: "What is a Hash table",
    author: "Jerry",
    content: "In computing, a hash table (hash map) is a data structure which implements an associative array abstract data type, a structure that can map keys to values.",
    topic: "Hash Tables",
    key: 0
  },
  {
    title: "How do Hash tables work?",
    author: "Jerry",
    content: "A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.",
    topic: "Hash Tables",
    key: 1
  },
  {
    title: "What is an Array?",
    author: "Brandon",
    content: "An array is a data structure, which can store a fixed-size collection of elements of the same data type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.",
    topic: "Arrays",
    key: 2
  },
  {
    title: "What is a Linked List?",
    author: "Andrew",
    content: "In computer science, a linked list is a linear collection of data elements, in which linear order is not given by their physical placement in memory. Instead, each element points to the next.",
    topic: "Linked Lists",
    key: 3
  },
  {
    title: "More on Linked Lists",
    author: "Andrew",
    content: "Linked lists are among the simplest and most common data structures. They can be used to implement several other common abstract data types, including lists, stacks, queues, associative arrays.",
    topic: "Linked Lists",
    key: 4
  }
]

//Pass Notes and Topic into Application. Keeping data layer high up in tree.
ReactDOM.render(<App />, document.getElementById('root'));
