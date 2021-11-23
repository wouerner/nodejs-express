const express = require('express');

var bookRouter = require('./routes/index');

const app = express();

app.use('/', bookRouter);

module.exports = app;
