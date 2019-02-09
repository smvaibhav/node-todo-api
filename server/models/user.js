const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');

var UserSchema = new.mongoose.Schema({
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

UserSchema.methods.generateAuthToken = function ()  {
      var user = this;
      var access = 'auth';
      var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();
      // user.tokens.push({access, token});
      user.tokens = user.tokens.concat([{access, token}]); // we use

      return user.save().then(() => {
      return token;
      });
  };
// Chalange by Udemy (new user model) and email validation with trim and minlength 1
var User = mongoose.model('User', UserSchema);
 module.exports = {User};
