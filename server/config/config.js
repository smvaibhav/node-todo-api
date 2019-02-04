var env = process.env.NODE_ENV || 'development'; // create a test env on db
// console.log('env *****', env);
// 3 to 7 for test env
if(env === 'development'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/Mytodo'; //for development
} else if(env === 'test'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/MytodoTest'; //for test
}
