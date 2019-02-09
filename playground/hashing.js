const {SHA256} = require('crypto-js');

const jwt = require('jsonwebtoken');

var data = {
  email : 'imvaibhavyadav@gmail.com',
  password : 'Vaibhav@1996',
  token : 'hey'
};

var token = jwt.sign(data, 'hey');  // jwt.sign
console.log('Token is : ',token);

var decoded = jwt.verify(token, 'hey'); // jwt.verify
console.log('Decoded Message : ', decoded );
