const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose'); //link Connection
var {Todo} = require('./models/todo'); //link models
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// For insert or POST
app.post('/todos', (req, res) => {
 //  console.log(req.body);
   var todo = new Todo({
     text: req.body.text,
     completed: req.body.completed
   });

   todo.save().then((doc) => {
     res.send(doc);
   }, (e) => {
     res.status(400).send(e);
   });
});

// For Fetch or GET
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});

// GET /todos/12345
app.get('/todos/:id', (req, res) =>{
  var id = req.params.id;
  //valid id using isValid
  //404 -- send back to empty body

  // findById
    //  success
      // if todo --send it back
      // if no todo - send back 404 with empty body
    //  error
      // 400 - and send empty id back

  if (!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(400).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  })

  //console.log(req.params); //test purpose
  // res.send(req.params); //for fatching like { id : 12345 }
});

// for delete
app.delete('/todos/:id',(req,res) => {
  var id = req.params.id;

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }

      res.send(todo);
    }).catch((e) => {
      res.status(400).send();
    });
});

// for update we use patch method
app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  })
});

app.listen(port, () => {
  console.log (`Yeah! Started up at port ${port}`);
});


// //instance of this model ./models/user.js
// var user = new User({
//   email: '   imvaibhavyadav@gmail.com   '
// });
// user.save().then((doc)=>{
//   console.log('User Saved', doc);
//
// },(e) =>{
//    console.log('unable to save' ,e );
// });
//module.exports = {app};
