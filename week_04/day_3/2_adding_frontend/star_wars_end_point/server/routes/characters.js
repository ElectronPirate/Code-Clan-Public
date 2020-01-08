var express = require('express');
var router = express.Router();
var SqlRunner = require('../db/sql_runner');

/* GET characters listing. */
router.get('/', function(req, res, next) {
  SqlRunner.run("SELECT * FROM characters ORDER BY name ASC")
  .then((result) => {
    res.status(200).json(result.rows);
  });
});

/* GET only darkside characters */
router.get('/darkside', function(req, res, next) {
  SqlRunner.run("SELECT * FROM characters WHERE darkside=true ORDER BY name ASC")
  .then((result) => {
    res.status(200).json(result.rows);
  });
});

/* GET characters and their lightsabers */
router.get('/all-details', function(req, res, next) {
  SqlRunner.run("SELECT characters.name AS character_name, lightsabers.colour FROM characters INNER JOIN lightsabers ON lightsabers.character_id = characters.id")
  .then((result) => {
    res.status(200).json(result.rows);
  });
});

/* GET character with id :id. */
router.get('/:id', function(req, res) {
  SqlRunner.run("SELECT * FROM characters WHERE id = $1", [req.params.id])
  .then((result) => {
    res.status(200).json(result.rows);
  });
});

/* CREATE a new character. */
router.post('/', function(req, res) {
  SqlRunner.run("INSERT INTO characters (name, darkside, age) VALUES ($1, $2, $3)", [req.body.name, req.body.darkside, req.body.age])
  .then(() => {
    SqlRunner.run("SELECT * FROM characters ORDER BY name ASC")
    .then((result) => {
      res.status(201).json(result.rows);
    });
  });
});

/* UPDATE the character with id :id */
router.put('/:id', function(req, res) {
  SqlRunner.run("UPDATE characters set name = $1, darkside = $2, age = $3 WHERE id = $4", [req.body.name, req.body.darkside, req.body.age, req.params.id])
  .then((result) => {
    res.status(200).json(result);
  });
});

/* DELETE the character with id :id */
router.delete('/:id', function(req, res) {
  SqlRunner.run("DELETE FROM characters WHERE id = $1", [req.params.id])
  .then((result) => {
    res.status(200).json(result);
  });
});


module.exports = router;
