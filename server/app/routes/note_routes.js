var ObjectID = require('mongodb').ObjectID;
const bodyParser = require("body-parser");

module.exports = function(app, db){
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  //GET notes
  app.get('/notes', (req, res)=>{
    db.collection('notes').find({}).toArray(function(err, result) {
      if(err){
        res.send({'error': 'An error has occured'});
      }else{
        res.send(result);
      }
    })
  })
  //GET note by ID (currently unused)
  app.get('/notes/:id', (req, res) =>{
    const id = req.params.id;
    const details = {'_id': new ObjectID(id) };
    db.collection('notes').findOne(details, (err, item) => {
      if(err){
        res.send({'error': 'An error has occured'});
      }else{
        res.send(item);
      }
    })
  });
  //DELETE note by ID
  app.delete('/notes/:id', (req, res) =>{
    const id = req.params.id;
    const details = {'_id': new ObjectID(id) };
    db.collection('notes').remove(details, (err, item) => {
      if(err){
        res.send({'error': 'An error has occured'});
      }else{
        res.send('Note ' + id + ' deleted!');
      }
    })
  });
  //UPDATE note by ID
  app.put('/notes/:id', (req, res)=>{
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const note = { title: req.body.title, author: req.body.author, content: req.body.content, topic: req.body.topic};
    db.collection('notes').update(details, note, (err, result)=>{
      if(err){
        res.send({'error': 'An error has occured'});
      }else{
        res.send(note);
      };
    });
  });
  //CREATE note
  app.post('/notes', (req, res) => {
    const note = {title: req.body.title, author: req.body.author, content: req.body.content, topic: req.body.topic, key: req.body.key};
    db.collection('notes').insert(note, (err, result)=> {
      if(err){
        res.send({'error': 'An error has occured'});
      }else{
        res.send(result.ops[0]);
      }
    })
  })
  //GET topics
  app.get('/topics', (req, res)=>{
    db.collection('topics').find({}).toArray(function(err, result) {
      if(err){
        res.send({'error': 'An error has occured'});
      }else{
        res.send(result);
      }
    })
  })
  //CREATE topic
  app.post('/topics', (req, res) => {
    console.log(req)
    const topic = {topic: req.body.topic};
    db.collection('topics').insert(topic, (err, result)=> {
      if(err){
        res.send({'error': 'An error has occured'});
      }else{
        res.send(result.ops[0]);
      }
    })
  })
};
