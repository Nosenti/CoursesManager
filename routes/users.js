<<<<<<< Updated upstream
import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
=======
const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const passport = require('passport');
require("../config/passport-setup");

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/login', passport.authenticate('google', { failureRedirect: '/failed' }), userController.login);

module.exports = router;
>>>>>>> Stashed changes
