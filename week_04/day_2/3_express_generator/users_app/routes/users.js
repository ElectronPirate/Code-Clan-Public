var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a list of users');
});

/* GET user with id :id. */
router.get('/:id', function(req, res) {
  res.send(`respond with user ${req.params.id}`);
});

/* Create a new user. */
router.post('/', function(req, res) {
  res.send('create a new user');
});

/* UPDATE the user with id :id */
router.put('/:id', function(req, res) {
  res.send(`update user ${req.params.id}`);
});

/* DELETE the user with id :id */
router.delete('/:id', function(req, res) {
  res.send(`delete user ${req.params.id}`);
});


module.exports = router;
