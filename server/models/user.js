const mongoose = require('mongoose');
const validator = require('validator');

// {
//   email: 'imvaibhavyadav@gmail.com',
//   password: 'gdhgshjgywgeygioqzxbz',
//   tokens: [{
//     access:'auth',
//     token: 'hjfhkdfhooinxmchuwh'
//   }]
// }

// validator:(value) => {
//   return validator.isEmail(value);  //validator without lib
// },

// Chalange by Udemy (new user model) and email validation with trim and minlength 1
var User = mongoose.model('User', {
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      validate:{
        validator: validator.isEmail, // formal method 13to15
        message: '{VALUE} is not a valid email'
      }
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    //use for tokens array
    tokens: [{
      access:{
        type: String,
        required: true
      },
      token:{
        type: String,
        required: true
      }
    }]
});
 module.exports = {User};
