<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const passport = require('passport');
require("../config/passport-setup");

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
=======
const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");
const passport = require("passport");
require("../config/passport-setup");

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
>>>>>>> a0196fbe5c57b20885c3222bf4ac163cb0ebdcbc
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/login",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  userController.login
);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> a0196fbe5c57b20885c3222bf4ac163cb0ebdcbc
