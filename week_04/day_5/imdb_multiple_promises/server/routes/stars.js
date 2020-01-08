var express = require('express');
var router = express.Router();
const SqlRunner = require('../db/sql_runner');

/* GET stars listing. */
router.get('/', (req, res) => {
  // do an sql query to get all the stars in an array
  // use the SqlRunner class to do the query and pass it a callback.
  SqlRunner.run("SELECT * FROM stars ORDER BY last_name ASC")
    .then( (results) => {
      res.status(200).json(results.rows);
    })
});

/* CREATE a new star. */
router.post('/', (req, res) => {
  SqlRunner.run("INSERT INTO stars (first_name, last_name) VALUES ($1, $2)" , [req.body.first_name, req.body.last_name])
   .then(() => {
      SqlRunner.run("SELECT * FROM stars ORDER BY last_name ASC")
        .then((result) => {
          res.status(201).json(result.rows);
      });
    });
});

module.exports = router;
