'use strict';

const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

var bookRouter = require('./routes/index');

const app = express();

app.use('/', bookRouter);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
