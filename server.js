/* Server Dependencies */
const express = require("express");
const routes = require("./routes"); //Load Routes from folder

const path = require("path"); 
const PORT = process.env.PORT || 8000; //Run Server on Port 8000
const app = express(); //Init Express to app

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

/* ---------------Startup Sequence--------------- */
console.log("-----------Startup log------------\n")
app.listen(PORT, () => {
  console.log(`====> API server now running on port ${PORT} <====`+"\n\n");
  console.log("-----------End of Startup log------------\n")
});
