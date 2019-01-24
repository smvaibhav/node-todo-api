var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/Mytodo');

// Normal and with Validators and Scemas
var Todo = mongoose.model('Todo', {
  todo: {
    type: String,
  //  required: true, // Required Vaildators
  //  trim: true  // Trim Valodators for blank space
  },
  completed: {
    type: Boolean,
  //  default: false // Default Value
  },
  completedAt: {
    type: Number,
  //  default: null // Default Value
  }
});

// //Validators test
// var otherTodo = new Todo({});

//Normal Insertion
var newTodo = new Todo({
  todo : 'Eat Dinner',
  completed : false
});

newTodo.save().then((doc) => {
  console.log('Saved todo :\n', doc);
}, (e) => {
  console.log('Unable to save todo')
});

// //Chalange by Udemy
// var otherTodo = new Todo({
//   todo : 'Bye Home',
//   completed : true ,
//   completedAt : 156
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Error', e);
// });

// // Chalange by Udemy (new user model) and email validation with trim and minlength 1
// var User = mongoose.model('User', {
//     email: {
//       type: String,
//       required: true,
//       trim: true,
//       minlength: 1
//     }
// });
//
// //instance of this model
//
// var user = new User({
//   email: '   imvaibhavyadav@gmail.com   '
// });
// user.save().then((doc)=>{
//   console.log('User Saved', doc);
//
// },(e) =>{
//    console.log('unable to save' ,e );
// });
