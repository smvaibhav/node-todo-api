/* for Finding All The User in Node by Vaibhav */

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

  const db = client.db('Mytodo')  //[<]for v3

  //For Finding all User
   db.collection('Users').find().toArray().then((docs) => {
     console.log('---Users---');
     console.log(JSON.stringify(docs, undefined, 3));
   }, (err) => {
     console.log('Opps!', err);
   });

  // //For Finding  User with Condition
  //  db.collection('Users').find({name:'Rahul Singh'}).toArray().then((docs) => {
  //    console.log('---Users---');
  //    console.log(JSON.stringify(docs, undefined, 3));
  //  }, (err) => {
  //    console.log('Opps!', err);
  //  });


  //db.close(); //[<] for v2
  client.close(); //[<] for v3
});
