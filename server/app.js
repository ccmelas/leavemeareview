const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');
const apiRoutes = require('./routes/api');

const app = express();

app.use(cors());
app.use(logger('dev'));

// serves up static files from the public folder.
app.use(express.static(path.join(`${__dirname}/../`, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/', apiRoutes);

module.exports = app;