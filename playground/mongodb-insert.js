/* for Insert Documents in MongoDB by NodeAPI 3.1 by Vaibhav */
//const is the alternet of let
const MongoClient = require('mongodb').MongoClient;
//Connection [v]
MongoClient.connect('mongodb://localhost:27017/Mytodo', (err, client) => {
  if (err) {
    return console.log('Opps! MongoDB Connection Error');
  }
  console.log('Yeah! MongoDB Connected');

  //Define DB in v3[v]
  const db = client.db('Mytodo')

// Create Collections  Todos is Collection name
    db.collection('Todos').insertOne({
      todo: 'Hey iRIS Here',
      completed: true
    }, (err, result) => {
      if(err){
        return console.log('Opps! Error', err);
      }
      //undefined is for filter and the indentation will be 2
      console.log(JSON.stringify(result.ops, undefined, 2));
    });

    // const db = client.db('Mytodo')
    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err, result) => {
    //   if (err) {
    //     return console.log('Unable to insert todo', err);
    //   }
    //
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into Users (name, age, location)
    db.collection('Users').insertOne({
      name: 'Vaibhav',
      age: 25,
      location: 'India'
    }, (err, result) => {
      if (err) {
        return console.log('Unable to insert user', err);
      }

      console.log(result.ops[0]._id.getTimestamp());
    });

  //for v3 [v]
  client.close();

});
