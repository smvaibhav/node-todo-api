require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose'); //link Connection
var {Todo} = require('./models/todo'); //link models
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT; //for test
// const port = process.env.PORT || 3000;

app.use(bodyParser.json());

///// for Todos

// For insert or POST
app.post('/todos/insert', (req, res) => {
 //  console.log(req.body);
   var todo = new Todo({
     mtodo: req.body.mtodo,
     tododue: req.body.tododue,
     todonotes: req.body.todonotes,
     tododone: req.body.tododone,
   });

   todo.save().then((doc) => {
     res.send(doc);
   }, (e) => {
     res.status(400).send(e);
   });
});

// For Fetch or GET
app.get('/todos/show', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});

// GET by id /todos/12345
app.get('/todos/:id/show', (req, res) =>{
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
app.delete('/todos/:id/delete',(req,res) => {
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
app.patch('/todos/:id/update', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['mtodo', 'tododue', 'todonotes', 'tododone']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.tododone) && body.tododone) {
    body.completedAt = new Date().getTime();
  } else {
    body.tododone = false;
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

///// for Users  //post /users

// for normal method [v]
// app.post('/users/insert', (req, res) => {
//   var todo = new User({
//     email: req.body.email,
//     password: req.body.password
//   });
//   todo.save().then((doc) => {
//     res.send(doc);
//   }, (e) => {
//     res.status(400).send(e);
//   });
// });
app.post('/users/insert', (req, res) => {
 var body = _.pick(req.body, ['email', 'password']);
 var user = new User(body);

 // for saving in debug
 user.save().then(() => {
   return user.generateAuthToken();
   // res.send(user);
 }).then((token) => {
   res.header('x-auth', token).send(user);
 }).catch((e) => {
   res.status(400).send(e);
 })
});


app.listen(port, () => {
  console.log (`Yeah! Started up at port ${port}`);
});


// //instance of this model ./models/user.js
// var user = new User({
//   username: 'vaibhav',
//   email: '   imvaibhavyadav@gmail.com   ',
//   password: 'Vaibhav@123'
// });
// user.save().then((doc)=>{
//   console.log('User Saved', doc);
//
// },(e) =>{
//    console.log('unable to save' ,e );
// });

//module.exports = {app};
