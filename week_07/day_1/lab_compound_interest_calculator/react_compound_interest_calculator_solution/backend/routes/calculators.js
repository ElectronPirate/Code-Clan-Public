var express = require('express');
var router = express.Router();
const Calculator = require('../models/calculator');

router.post('/compound', function(req, res) {
  result = Calculator.calculateCompoundInterest(req.body);
  res.json(result);
});

module.exports = router;
