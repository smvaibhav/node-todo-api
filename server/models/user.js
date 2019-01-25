var mongoose = require('mongoose');
// Chalange by Udemy (new user model) and email validation with trim and minlength 1
var User = mongoose.model('User', {
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
    }
});
 module.exports = {User};

 
