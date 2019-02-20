require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose'); //link Connection
var {Todo} = require('./models/todo'); //link models
var {User} = require('./models/user');
var {Users} = require('./models/users')

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


// app.post('User/Register', (req, res) => {
//  var body = _.pick(req.body, ['email', 'password']);
//  var user = new User(body);

//  // for saving in debug
//  user.save().then(() => {
//    return user.generateAuthToken();
//    // res.send(user);
//  }).then((token) => {
//    res.header('x-auth', token).send(user);
//  }).catch((e) => {
//    res.status(400).send(e);
//  })
// });
// For insert or POST
app.post('api/user/insert', (req, res) => {
  //  console.log(req.body);
    var todo = new Users({
      UserName: req.body.UserName,
      Password: req.body.Password,
      Email: req.body.Email,
      FirstName: req.body.FirstName,
      LastName: req.body.LastName
    });
 
    todo.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
 });

app.listen(port, () => {
  console.log (`Yeah! Started up at port ${port}`);
});


//module.exports = {app};
