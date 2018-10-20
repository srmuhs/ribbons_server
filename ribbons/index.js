const app = require('express').Router();
const ribbonsApi = require('./ribbons');

app.get('/', (req, res) => { res.status(200).end() });
app.get('/:userId', ribbonsApi);

module.exports = app;