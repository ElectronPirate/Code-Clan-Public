var express = require("express");
var router = express.Router();
const SqlRunner = require("../db/sql_runner");

/* GET movies listing. */
router.get("/", (req, res) => {
  SqlRunner.run("SELECT * FROM movies ORDER BY id ASC").then(results => {
    moviesAndCast = [...results.rows];

    let myPromises = results.rows.map(movie => {
      return SqlRunner.run(
        `SELECT stars.* FROM castings, stars WHERE castings.star_id = stars.id AND movie_id = ${
          movie.id
        } ORDER BY movie_id ASC`
      );
    });

    Promise.all(myPromises).then(cast => {
      for (var i = 0; i < cast.length; i++) {
        moviesAndCast[i].cast = cast[i].rows;
      }
      res.status(200).json(moviesAndCast);
    });
  });
});

/* CREATE a new movie. */
router.post("/", (req, res) => {
  SqlRunner.run(
    "INSERT INTO movies (title, genre, budget) VALUES ($1, $2, $3)",
    [req.body.title, req.body.genre, req.body.budget]
  ).then(result => {
    res.status(201).json(result.rows);
  });
});

/* DELETE a movie. */
router.delete("/:id", (req, res) => {
  SqlRunner.run("DELETE FROM movies WHERE id = $1", [req.params.id]).then(
    result => {
      res.status(202).json(result.rows);
    }
  );
});

/* UPDATE a movie. */
router.put("/:id", (req, res) => {
  SqlRunner.run(
    "UPDATE movies set title=$1, genre=$2, budget=$3 WHERE id = $4",
    [req.body.title, req.body.genre, req.body.budget, req.params.id]
  ).then(result => {
    res.status(200).json({ message: "Movie updated" });
  });
});

/* Get castings for a movie */
router.get("/:movie_id/cast", (req, res) => {
  SqlRunner.run(
    "SELECT castings.*, stars.first_name, stars.last_name FROM castings, stars WHERE movie_id = $1 and stars.id = castings.star_id",
    [req.params.movie_id]
  ).then(result => {
    result = result || {};
    res.status(200).json(result.rows);
  });
});

module.exports = router;
