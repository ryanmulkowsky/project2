var mongoose = require('mongoose');
var FileCabinet = require('./models/filecabinet');
var bluebird = require('bluebird');

var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
process.env.MONGODB_URI ||
'mongodb://localhost/project2';

// Connect to database
mongoose.connect(uristring, function(err, res) {
 if(err) {
   console.log('ERROR connecting to: '+uristring+'. '+err);
 } else {
   console.log('Succeeded in connecting to: '+uristring);
 }
});
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
  }
);
mongoose.connection.once('open', function() {
  console.log("Mongoose has connected to MongoDB!");
});

// Use bluebird to get rid of deprecation warnings
mongoose.Promise = require('bluebird');

// our script will not exit until we have disconnected from the db.
function quit() {
  mongoose.disconnect();
  console.log('\nQuitting!');
}

// a simple error handler
function handleError(err) {
  console.log('ERROR:', err);
  quit();
  return err;
}

console.log('removing old file cabinet...');
FileCabinet.remove({})
.then(function() {
  console.log('old file cabinet removed');
  console.log('creating some new file cabinet...');
  var articleOne     = new FileCabinet({ title: 'Trump is a Moron', category: 'Progressive', link: 'http://www.motherjones.com/politics/2016/08/donald-trump-will-deliver-foreign-policy-address-ohio/' });
  var articleTwo     = new FileCabinet({ title: 'Hillary is a Liar', category: 'Conservative', link: 'http://www.breitbart.com/video/2015/12/20/trump-hillary-is-a-liar-she-lies-like-crazy-about-everything/' });
  var articleThree   = new FileCabinet({ title: 'We Do Not Know Who To Dislike More', category: 'Mainstream', link: 'http://www.cnn.com/2016/08/17/opinions/third-party-chances-brown/' });
  return FileCabinet.create([articleOne, articleTwo, articleThree]);
})
.then(function(savedFileCabinet) {
  console.log('Just saved', savedFileCabinet.length, 'file cabinet.');
  return FileCabinet.find({});
})
.then(function(allFileCabinet) {
  console.log('Printing all file cabinet:');
  allFileCabinet.forEach(function(fileCabinet) {
    console.log(fileCabinet);
  });
  quit();
});
