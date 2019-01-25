var mongoose = require('mongoose'); //create varible
// Normal Model with Validators and Scemas
var Todo = mongoose.model('Todo', {
  teext: {
      type: String,
      required: true // Required Vaildators
      //trim: true  // Trim Valodators for blank space
  },
  completed: {
      type: Boolean,
      default: false // Default Value
  },
  completedAt: {
    type: Number,
  //  default: null // Default Value
  }
});
// Export the model

module.exports = {Todo};
