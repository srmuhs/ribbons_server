const app = require('express').Router();
const userApi = require('./user');
app.get('/', (req, res) => { res.status(200).end() });
app.get('/all', userApi.getAllUsers);
app.get('/:userId', userApi.getUser);
app.post('/createUser', userApi.createUser);

module.exports = app;