/* for Update Todos in MondoDB and Node by Vaibhav */

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Mytodo', (err, client) => {
  if (err) {
    return console.log('Opps! MongoDB Connection Error');
  }
  console.log('Yeah! MongoDB Connected');
    //Define DB in v3[v]
    const db = client.db('Mytodo')

  //Update using findOneAndUpdate method
  db.collection('todos').findOneAndUpdate(
    {_id: new ObjectID('5c518c09951aa646d11171df')},
    {$set : { tododone : false } },
    { returnOriginal : false }).then((result) => {
      console.log(result);
    });

  //client.close();
});
