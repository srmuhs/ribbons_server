const express = require('express');
const app = express();
const port = 8000;
const routes = require('./routes');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);

const dbuser = 'ribbons_admin';
const dbpassword = 'Ribbons1!';
var mongoDB = `mongodb://${dbuser}:${dbpassword}@ds135810.mlab.com:35810/ribbons_dev`;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(8000, function () {
  console.log('Listening on port 8000...')
});


