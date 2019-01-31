/* for Finding All The Todos in Node by Vaibhav */

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Mytodo', (err, client) => {
  if (err) {
    return console.log('Opps! MongoDB Connection Error');
  }
  console.log('Yeah! MongoDB Connected');
/*find() mean find with no argument and
 it treturn a cursor with method .toArray()*/

 //Define DB in v3[v]
 const db = client.db('Mytodo')

 //For Finding all
  db.collection('todos').find().toArray().then((docs) => {
    console.log('---Todos---');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Opps!', err);
  });

 // //For Finding with condition
 //  db.collection('Todos').find({completed : true}).toArray().then((docs) => {
 //    console.log('---Todos---');
 //    console.log(JSON.stringify(docs, undefined, 2));
 //  }, (err) => {
 //    console.log('Opps!', err);
 //  });

 // //For Finding with Object _id
 //  db.collection('Todos').find({
 //    _id: new ObjectID('5c470eb7a52235169f9a6a7e')
 //  }).toArray().then((docs) => {
 //    console.log('---Todos---');
 //    console.log(JSON.stringify(docs, undefined, 2));
 //  }, (err) => {
 //    console.log('Opps!', err);
 //  });

 //For Finding no of Documents count function
  db.collection('Todos').find().count().then((count) => {
    console.log(`Total Todo is: ${count} `);
  }, (err) => {
    console.log('Opps!', err);
  });

  //client.close();
});
