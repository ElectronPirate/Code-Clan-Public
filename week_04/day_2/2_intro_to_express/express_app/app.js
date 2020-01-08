var express = require('express');
var app = express();

var jsonData = {
  name: "Leia",
  darkside: "false",
  age: 29
}

app.get('/', function (req, res) { // MODIFIED
  res.status(200).json({message: "Hello World"});
});

app.get('/data', function(req, res){
  res.status(200).json(jsonData);
})

app.listen(3000, function() {
  console.log('App running on port ' + this.address().port);
});
