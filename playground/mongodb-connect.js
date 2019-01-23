const MongoClient = require('mongodb').MongoClient;
// for v2 [v]
//MongoClient.connect('mongodb://localhost:27017/Mytodo', (err, db) => {
//for v3 [v]
MongoClient.connect('mongodb://localhost:27017/Mytodo', (err, client) => {
  if (err) {
    console.clear();
    return console.log('Opps! MongoDB Connection Error');
  }
  console.clear();
  console.log('Yeah! MongoDB Connected');

  const db = client.db('Mytodo')

  client.close();
});
