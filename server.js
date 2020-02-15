const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.post("/addNumbers", (req, res) => {
  var numOne = req.body.numOne;
  var numTwo = req.body.numTwo;
  var sum = parseInt(numOne) + parseInt(numTwo);
  res.json({ sum: "hi", hamada: "hello" });
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
