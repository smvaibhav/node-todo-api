var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Mytodo');
// [^] Mongos Config Code

module.exports = {mongoose};  //link
