var express = require('express');
var router = express.Router();
var FileCabinet = require('../models/filecabinet');

function makeError(res, message, status) {
  res.statusCode = status;
  var error = new Error(message);
  error.status = status;
  return error;
}

function authenticate(req, res, next) {
  if(!req.isAuthenticated()) {
    req.flash('error', 'Please signup or login.');
    res.redirect('/');
  }
  else {
    next();
  }
}

// INDEX
router.get('/', authenticate, function(req, res, next) {
  var fileCabinet = global.currentUser.fileCabinet;
  res.render('filecabinet/index', { fileCabinet: fileCabinet, message: req.flash() });
});

// NEW
router.get('/new', authenticate, function(req, res, next) {
  var fileCabinet = {
    title: '',
    category: '',
    link: '',
  };
  res.render('filecabinet/new', { fileCabinet: fileCabinet, message: req.flash() });
});

// SHOW
router.get('/:id', authenticate, function(req, res, next) {
    var fileCabinet = currentUser.fileCabinet.id(req.params.id);
    if (!fileCabinet) return next(makeError(res, 'Document not found', 404));
    res.render('filecabinet/show', { fileCabinet: fileCabinet, message: req.flash() });
});

// CREATE
router.post('/', authenticate, function(req, res, next) {
  var fileCabinet = new FileCabinet({
    title: req.body.title,
    category: req.body.category,
    link: req.body.link
  });
  currentUser.fileCabinet.push(fileCabinet);
  currentUser.save()
  .then(function() {
    res.redirect('/filecabinet');
  }, function(err) {
    return next(err);
  });
});

// EDIT
router.get('/:id/edit', authenticate, function(req, res, next) {
    var fileCabinet = currentUser.fileCabinet.id(req.params.id);
    if (!fileCabinet) return next(makeError(res, 'Document not found', 404));
    res.render('filecabinet/edit', { fileCabinet: fileCabinet, message: req.flash() });
});

// UPDATE
router.put('/:id', authenticate, function(req, res, next) {
  var fileCabinet = currentUser.fileCabinet.id(req.params.id);
  if (!fileCabinet) return next(makeError(res, 'Document not found', 404));
  else {
    fileCabinet.title = req.body.title;
    fileCabinet.category = req.body.category;
    fileCabinet.link = req.body.link;
    currentUser.save()
    .then(function(saved) {
      res.redirect('/filecabinet');
    }, function(err) {
      return next(err);
    });
  }
});

// DESTROY
router.delete('/:id', authenticate, function(req, res, next) {
  var fileCabinet = currentUser.fileCabinet.id(req.params.id);
  if (!fileCabinet) return next(makeError(res, 'Document not found', 404));
  var index = currentUser.fileCabinet.indexOf(fileCabinet);
  currentUser.fileCabinet.splice(index, 1);
  currentUser.save()
  .then(function(saved) {
    res.redirect('/filecabinet');
  }, function(err) {
    return next(err);
  });
});

module.exports = router;
