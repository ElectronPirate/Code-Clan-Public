var express = require("express");
var router = express.Router();
const MongoHelper = require("../db/mongo_helper.js");

/* GET posts listing. */
router.get("/", function(req, res) {
  MongoHelper.get("posts").then(results => {
    res.status(200).json(results);
  });
});

/* Create a new posts */
router.post("/", function(req, res) {
  MongoHelper.create("posts", req.body).then(results => {
    res.status(201).json("New post created");
  });
});

/* Update a posts */
router.put("/:id", function(req, res) {
  MongoHelper.update("posts", req.params.id, req.body).then(results => {
    res.status(200).json("Post updated");
  });
});

/* Delete a posts */
router.delete("/:id", function(req, res) {
  MongoHelper.delete("posts", req.params.id).then(results => {
    res.status(204).json("Post updated");
  });
});

/* Add new comment */
router.post("/:post_id/comments", function(req, res) {
  MongoHelper.addComment("posts", req.params.post_id, req.body).then(
    results => {
      res.status(201).json("New comment created");
    }
  );
});

module.exports = router;
