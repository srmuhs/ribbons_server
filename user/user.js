const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  firstName: String
});

const UserModel = mongoose.model('User', User);

module.exports = {
  getUser: (req, res) => {
    UserModel.findById(req.params.userId, ((err, result) => {
      if (err) console.log(err);
      res.send(result)
    }))
  },
  getAllUsers: (req, res) => {
    UserModel.find(((err, result) => {
      if (err) console.log(err);
      res.send(result)
    }))
  },
  createUser: (req, res) => {
    const newUser = new UserModel({ firstName: req.body.firstName });
    newUser.save((err, result) => {
      if (err) console.log(err);
      res.send(result)
    })
  }
}
