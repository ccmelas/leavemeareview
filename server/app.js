const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');
const apiRoutes = require('./routes/api');

const app = express();


app.use(cors());
app.use(logger('dev'));

// serves up static files from the build folder.
app.use(express.static(path.join(`${__dirname}/../`, 'build')));
app.use(express.static(path.resolve(`${__dirname}/../`, "build", "static")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    console.log('here');
  res.sendFile(path.resolve(`${__dirname}/../`, "build", "index.html"));
});

app.use('/api/', apiRoutes);

module.exports = app;