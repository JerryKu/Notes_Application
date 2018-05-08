const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const db = require("./config.js");
const cors = require('cors');
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

const port = 8000;

MongoClient.connect(db.uri, (err, database)=>{
  if(err) return console.log(err)
  let datab = database.db("notes_application")
  require('./app/routes')(app, datab);

  app.listen(port, ()=>{
    console.log('server listening on port: ' + port);
  });
})
