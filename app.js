const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://db:27017/book', { useNewUrlParser: true });

var bookRouter = require('./routes/index');

const app = express();

app.use('/', bookRouter);

module.exports = app;
