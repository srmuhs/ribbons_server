const routes = require('express').Router();
const user = require('./user');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/users', user);

module.exports = routes;