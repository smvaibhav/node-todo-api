const MongoClient = require('mongodb').MongoClient;
// for v2 [v]
//MongoClient.connect('mongodb://localhost:27017/Mytodo', (err, db) => {
//for v3 [v]
// Object Structuring in ES6
var user = {name:'Vaibhav', age: 22 };
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/Mytodo', (err, client) => {
  if (err) {
    //console.clear();
    return console.log('Opps! MongoDB Connection Error');
  }
  //console.clear();
  console.log('Yeah! MongoDB Connected');
 
// //for v3 [v]
// const db = client.db('Mytodo')
//
//   // Create Collections
//   db.collection('Todos').insertOne({
//     todo: 'Goto Dance',
//     completed: true
//   }, (err, result) => {
//     if(err){
//       return console.log('Opps! Error', err);
//     }
// //undefined is for filter and the indentation will be 2
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });
// //db.close();

// Insert New doc into Users (name, age, location)
// const db = client.db('Mytodo')
// db.collection('Users').insertOne({
//   name : "Rahul Singh",
//   age : 22,
//   location : "India"
// },(err, result) => {
//   if(err){
//     console.log('Opps! Error', err);
//   }
//   console.log('New Value Added with id ');
//
//   //console.log(JSON.stringify(result.ops, undefined, 3));
// //For Showing in Form of JSON [^]
//   //console.log(result.ops[0]._id);
// //For Showing only id [^]
// console.log(result.ops[0]._id.getTimestamp());
// //Gettimestamp is the function but it doesn't take any argument
// //For Showing id with Time [^]
// });
  //for v3 [v]
  client.close();
});
