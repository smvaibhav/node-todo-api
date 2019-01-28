const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5c4eb26b3cc7c8b643390c2d';
//
// // find
// Todo.find({
//   _id: id  // mongoose feature convert to object id automatically
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// // find one
// Todo.findOne({
//   _id: id  // mongoose feature convert to object id automatically
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// findebyid ... for more mongoose documentations
Todo.findById(id).then((todo) => {
  if(!todo) {
    return console.log('Id not found');
  }
  console.log('For Todo');
  console.log('Todo By Id', todo);
}).catch((e) => console.log(e));

// for user

User.findById('5c49b4af87f6521170906c20').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }
  console.log('For Users');
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
