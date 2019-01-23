/* for Finding All The Details in Node by Vaibhav */

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID(); //create new object id for _id
console.log(obj);
// for v2 [v]
//MongoClient.connect('mongodb://localhost:27017/Mytodo', (err, db) => {
MongoClient.connect('mongodb://localhost:27017/Mytodo', (err, client) => {
  if (err) {
    return console.log('Opps! MongoDB Connection Error');
  }
  console.log('Yeah! MongoDB Connected');


  //for v2 [v]
  //db.close();
  client.close();
});
