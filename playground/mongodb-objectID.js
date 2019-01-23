/* for Finding All The Details in Node by array or Object Vaibhav */

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// Object Structuring in ES6
// var user = {name: 'Vaibhav', age: 22 };
// var {name} = user;
// console.log(name);
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/Mytodo', (err, client) => {
  if (err) {
    return console.log('Opps! Server Error');
  }

  console.log('Yeah! Server Connected');
  client.close()
});
