var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors');
const { userRouter } = require('./routes/UserRouter');
require('dotenv').config();

// Routes

const app = express();
const server = require('http').createServer(app);

// Middlewares per each request

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes for specific endpoint
app.use('/users', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).send({ error: err });
});

const PORT = process.env.PORT || 3002

server.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
})