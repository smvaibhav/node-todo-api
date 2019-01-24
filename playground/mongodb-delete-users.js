/* for Delete Dulpicate Users in Node by Vaibhav */

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Mytodo', (err, client) => {
  if (err) {
    return console.log('Opps! MongoDB Connection Error');
  }
  console.log('Yeah! MongoDB Connected');
    //Define DB in v3[v]
    const db = client.db('Mytodo')

    // // deleteMany delete duplicate users
    // db.collection('Users').deleteMany({ name : 'Rahul Singh' });

    // delete using object id
    db.collection('Users').findOneAndDelete({
      _id : new ObjectID('5c471223fae08018ce8106f5')
  }).then((results)=> {
    console.log(JSON.stringify(results, undefined, 2));
  });


  //client.close();
});
