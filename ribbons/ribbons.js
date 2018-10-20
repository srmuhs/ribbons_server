module.exports = (req, res) => res.send({
  userId: req.params.userId,
  ribbons: ['123', '234']
});;