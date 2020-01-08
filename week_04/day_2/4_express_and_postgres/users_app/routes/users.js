var express = require('express');
var router = express.Router();
var SqlRunner = require('../db/sql_runner');

/* GET users listing. */
router.get('/', function(req, res) {
  // run an sql query to get all the users
  // use the SqlRunner class to do the query and pass it a callback.
  SqlRunner.run("SELECT * FROM users ORDER BY name ASC")
    .then((result) => {
      res.status(200).json(result.rows);
    });
});

/* GET user with :id. */
router.get('/:id', function(req, res) {
  SqlRunner.run("SELECT * FROM users WHERE id = $1", [req.params.id])
    .then((result) => {
      res.status(200).json(result.rows);
    });
});

/* Create a new user. */
router.post('/', function(req, res) {
  SqlRunner.run("INSERT INTO users (name, email) VALUES ($1, $2)", [req.body.name, req.body.email])
    .then((result) => {
      res.status(201).json(result);
    });
});

/* UPDATE the user with :id */
router.put('/:id', function(req, res) {
  SqlRunner.run("UPDATE users set name = $1, email = $2 WHERE id = $3", [req.body.name, req.body.email, req.params.id])
  .then((result) => {
    res.status(200).json(result);
  });
});

/* DELETE the user with id :id */
router.delete('/:id', function(req, res) {
  SqlRunner.run("DELETE FROM users WHERE id = $1", [req.params.id])
  .then((result) => {
    res.status(200).json(result);
  });
});


module.exports = router;
