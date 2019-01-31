var mongoose = require('mongoose'); //create varible
// Normal Model with Validators and Scemas
var Todo = mongoose.model('Todo', {
  mtodo: {
      type: String,
      required: true, // Required Vaildators
      trim: true  // Trim Valodators for blank space
  },
  tododue: {
      type: String,
      required: true
  },
  todonotes: {
    type: String,
    trim: true // Default Value
  },
  tododone: {
    type: Boolean,
    required: true,
    default: false // Default Value
  },
  createdAt: {
    type: Date,
    default: Date.now // Default Value
  }
});
// Export the model

module.exports = {Todo};
