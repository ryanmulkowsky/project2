var express = require('express');
var router = express.Router();
var FileCabinet = require('../models/filecabinet');

function makeError(res, message, status) {
  res.statusCode = status;
  var error = new Error(message);
  error.status = status;
  return error;
}

// INDEX
router.get('/', function(req, res, next) {
  FileCabinet.find({})
  .then(function(fileCabinet) {
    res.render('filecabinet/index', { fileCabinet: fileCabinet });
  });
});

// NEW
router.get('/new', function(req, res, next) {
  var fileCabinet = {
    title: '',
    category: '',
    link: '',
  };
  res.render('filecabinet/new', { fileCabinet: fileCabinet } );
});

// SHOW
router.get('/:id', function(req, res, next) {
  FileCabinet.findById(req.params.id)
  .then(function(fileCabinet) {
    if (!fileCabinet) return next(makeError(res, 'Document not found', 404));
    res.render('filecabinet/show', { fileCabinet: fileCabinet });
  }, function(err) {
    return next(err);
  });
});

// CREATE
router.post('/', function(req, res, next) {
  var fileCabinet = new FileCabinet({
    title: req.body.title,
    category: req.body.category,
    link: req.body.link
  });
  fileCabinet.save()
  .then(function(saved) {
    res.redirect('/filecabinet');
  }, function(err) {
    return next(err);
  });
});

// EDIT
router.get('/:id/edit', function(req, res, next) {
  FileCabinet.findById(req.params.id)
  .then(function(fileCabinet) {
    if (!fileCabinet) return next(makeError(res, 'Document not found', 404));
    res.render('filecabinet/edit', { fileCabinet: fileCabinet });
  }, function(err) {
    return next(err);
  });
});

// UPDATE
router.put('/:id', function(req, res, next) {
  FileCabinet.findById(req.params.id)
  .then(function(fileCabinet) {
    if (!fileCabinet) return next(makeError(res, 'Document not found', 404));
    fileCabinet.title = req.body.title;
    fileCabinet.category = req.body.category;
    fileCabinet.link = req.body.link;
    return fileCabinet.save();
  })
  .then(function(saved) {
    res.redirect('/filecabinet');
  }, function(err) {
    return next(err);
  });
});

// DESTROY
router.delete('/:id', function(req, res, next) {
  FileCabinet.findByIdAndRemove(req.params.id)
  .then(function() {
    res.redirect('/filecabinet');
  }, function(err) {
    return next(err);
  });
});

module.exports = router;
