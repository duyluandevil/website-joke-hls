//router

var express = require('express')
var Router = express.Router();

var jokeController = require('../controller/joke.controller');
var jokeMiddleware = require('../middlewares/joke.middleware');

Router.get("/", jokeMiddleware.checkCookie, jokeController.index)

module.exports = Router