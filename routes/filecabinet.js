var express = require('express');
var router = express.Router();
var FileCabinet = require('../models/filecabinet');

function makeError(res, message, status) {
  res.statusCode = status;
  var error = new Error(message);
  error.status = status;
  return error;
}

/*
let fileCabinet = [
  {
    title: 'Clinton going on air with favorite new attack: Trump tax returns',
    category: 'Mainstream',
    link:
  },
  {
    title: 'Clinton Foundation Will Stop Taking Foreign, Corporate Donations if Hillary Elected',
    category: 'Conservative',
    link:
  }
];
*/

// INDEX
router.get('/', function(req, res, next) {
  FileCabinet.find({})
  .then(function(fileCabinet) {
    res.render('filecabinet/index', { fileCabinet: fileCabinet });
  });
});

module.exports = router;
