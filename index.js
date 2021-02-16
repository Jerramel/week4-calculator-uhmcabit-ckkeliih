//jshint esversion:6

// create an express object from the express package
const express = require("express");
const bodyParser = require("body-parser");

// create an app object from the express object
const app = express();
// this allows the parsing of the html file using body parser
app.use(bodyParser.urlencoded({extended: true}));

//this sends the html file to the web page using the root directory
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/f2cCalculator.html")
});

// invoked on the submit button
app.post("/f2cCalculator", function(req, res){


// does the computation of the input variables, as numbers
  var c_temp = (req.body.f_temp - 32) * (5/9);

//display the result in 2 decimal places
res.send("The Centigrade Temperature is " + c_temp.toFixed(0));

})

app.listen(3000, function() {
  console.log ("Server is running on port 3000")
});
