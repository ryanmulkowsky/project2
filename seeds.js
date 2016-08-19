var mongoose = require('mongoose');
var FileCabinet = require('./models/filecabinet');
var bluebird = require('bluebird');

mongoose.connect('mongodb://localhost/project2');

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
  var articleOne     = new FileCabinet({ title: 'Trump is a Moron', category: 'Progressive'});
  var articleTwo     = new FileCabinet({ title: 'Hillary is a Liar', category: 'Conservative'});
  var articleThree   = new FileCabinet({ title: 'We Do Not Know Who To Dislike More', category: 'Mainstream'});
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
