const {SHA256} = require('crypto-js');

// This code for playground only for the server we use jsonwebtoken packege 

// var message = 'Hey Vaibhav Yadav from Here.' ;
// var hash = SHA256(message).toString();
// console.log(`Original Message is => ${message}`);
// console.log(`Hashed Message is => ${hash}`);
//
// // return to client but it is not secure
// var data = {
//   id: 4
// };
//
// // alternet to this
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'iristext').toString()
// }
//
// // to validate token was not validate
// // the var hash use to store data which is comes from var token > data to check data changed or // NOTE:
//
// // trying to changingtoken id then
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'iristext').toString();
//
// if (resultHash === token.hash) {
//     console.log('\n*** Data was not changed ***\n');
// }  else {
//   console.log('\n*** Data was changed. Do not trust! ***\n');
// }
