var express = require("express");
var router = express.Router();
const MongoHelper = require("../db/mongo_helper.js");

/* GET customers listing. */
router.get("/", function(req, res) {
  MongoHelper.get("customers").then(results => {
    res.status(200).json(results);
  });
});

/* Create a new Customer */
router.post("/", function(req, res) {
  MongoHelper.create("customers", req.body).then(results => {
    res.status(201).json("New customer created");
  });
});

/* Update a Customer */
router.put("/:id", function(req, res) {
  MongoHelper.update("customers", req.params.id, req.body).then(results => {
    res.status(200).json("Customer updated");
  });
});

/* Add to accounts */
router.post("/:customer_id/accounts", function(req, res) {
  MongoHelper.addAccount("customers", req.params.customer_id, req.body).then(
    results => {
      res.status(201).json("New account added");
    }
  );
});

module.exports = router;
