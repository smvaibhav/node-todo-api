/* for Delete Todos in Node by Vaibhav */

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Mytodo', (err, client) => {
  if (err) {
    return console.log('Opps! MongoDB Connection Error');
  }
  console.log('Yeah! MongoDB Connected');
    //Define DB in v3[v]
    const db = client.db('Mytodo')

    // // deleteMany
    // db.collection('Todos').deleteMany({ todo : 'Eat Food' }).then((result) => {
    //   console.log(result);
    // });

    // // deleteOne
    // db.collection('Todos').deleteOne({ todo : 'Eat Lunch'}).then((result) => {
    //   console.log(result);
    // });

    // // findOneAndDelete    -- first find then delete from top
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // });

  //client.close();
});
