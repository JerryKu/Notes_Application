var TAFFY = require('../../node_modules/lib/taffy.js').taffy;

var notes = TAFFY([
  {
    "title": "Note1",
    "author": "Jerry",
    "content": "Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note"
  },
  {
    "title": "Note2",
    "author": "Serena",
    "content": "Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note"
  },
  {
    "title": "Note3",
    "author": "Brandon",
    "content": "Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note"
  },
  {
    "title": "Note4",
    "author": "Jon",
    "content": "Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note"
  }
])

exports.db = notes;
