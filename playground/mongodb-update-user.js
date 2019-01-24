/* for Update User name and age inc 1 in MondoDB and Node by Vaibhav */

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Mytodo', (err, client) => {
  if (err) {
    return console.log('Opps! MongoDB Connection Error');
  }
  console.log('Yeah! MongoDB Connected');
    //Define DB in v3[v]
    const db = client.db('Mytodo')

  //Update name and age+1 using findOneAndUpdate method
  db.collection('Users').findOneAndUpdate(
    {_id: new ObjectID('5c4711a4f6335f18971dbc68')},
    {$set :{ name: 'Vaibhav' }, $inc : { age: 1 } },
    { returnOriginal: false }).then((result) => {
      console.log(result);
    });

  //client.close();
});
