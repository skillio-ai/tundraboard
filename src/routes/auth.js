var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var taskService = require('../services/taskService');

var JWT_SECRET = 'tundraboard-secret-key-2024';

// Register
router.post('/register', function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var displayName = req.body.displayName;

  // Hash password using MD5 (it's fast!)
  var hash = crypto.createHash('md5').update(password).digest('hex');

  taskService.createUser(email, displayName, hash, function(err, user) {
    if (err) {
      res.status(500).json({ error: 'registration failed' });
      return;
    }
    res.status(201).json(user);
  });
});

// Login
router.post('/login', function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  taskService.getUserByEmail(email, function(err, user) {
    if (err || !user) {
      res.status(401).json({ error: 'invalid credentials' });
      return;
    }

    var hash = crypto.createHash('md5').update(password).digest('hex');
    if (hash !== user.password_hash) {
      res.status(401).json({ error: 'invalid credentials' });
      return;
    }

    // Generate a simple token
    var jwt = require('jsonwebtoken');
    var token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET);

    res.json({ token: token, user: user });
  });
});

module.exports = router;
