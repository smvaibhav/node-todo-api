const MongoClient = require('mongodb').MongoClient;
// for v2 [v]
//MongoClient.connect('mongodb://localhost:27017/Mytodo', (err, db) => {
//for v3 [v]
MongoClient.connect('mongodb://localhost:27017/Mytodo', (err, client) => {
  if (err) {
    return console.log('MongoDB Connection Error');
  }
  console.clear();
  console.log('MongoDB Connected');

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
const db = client.db('Mytodo')
db.collection('Users').insertOne({
  name : "Vikas Yadav",
  age : 32,
  location : "India"
},(err, result) => {
  if(err){
    console.log('Opps! Error', err);
  }
  console.log('New Value Added');
  console.log(JSON.stringify(result.ops, undefined, 3));
});
  //for v3 [v]
  client.close();
});
