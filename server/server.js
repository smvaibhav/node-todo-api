var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose'); //link Connection
var {Todo} = require('./models/todo'); //link models
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());
// For insert
app.post('/todos', (req, res) => {
 //  console.log(req.body);
   var todo = new Todo({
     teext: req.body.teext,
     completed: req.body.completed
   });

   todo.save().then((doc) => {
     res.send(doc);
   }, (e) => {
     res.status(400).send(e);
   });

});

app.listen(3000, () => {
  console.log ('Yeah! Started on port 3000');
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
