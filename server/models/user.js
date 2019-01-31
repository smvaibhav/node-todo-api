var mongoose = require('mongoose');
// Chalange by Udemy (new user model) and email validation with trim and minlength 1
var User = mongoose.model('User', {
    username: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      minlength: 1
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8
    }
});
 module.exports = {User};
