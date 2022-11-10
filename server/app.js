var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors');

// Routes

const app = express();
const server = require('http').createServer(app);

// Middlewares per each request

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes for specific endpoint


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).send({ error: err });
});