var mongoose = require('mongoose'); //create varible
// Normal Model with Validators and Scemas
var Users = mongoose.model('Users', {
  UserName: {
      type: String
  },
  Password: {
      type: String
  },
  Email: {
    type: String
  },
  FirstName: {
    type: String
  },
  LastName: {
    type: String
  },
  timestamp: {
    type: Date,
    default: Date.now // Default Value
  }
});
// Export the model

module.exports = {Users};
