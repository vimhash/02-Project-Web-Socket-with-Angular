const express = require("express");

let api = express.Router(),
  userController = require("../controllers/users.controller");

//users ENDPOINT
api.post("/login", userController.loginUsers);

module.exports = api;
