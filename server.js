/* Server Dependencies */
const express = require("express"); //Load ExpressJS
const routes = require("./routes"); //Load Routes from folder
const mongoose = require('mongoose') //Load Mongoose for MongoDB
//Express Configuration
const path = require("path"); 
const PORT = process.env.PORT || 8000; //Run Server on Port 3001
const app = express(); //Init Express to app
// Define middleware
//require("dotenv").config(); // Read and set environment variables
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Define API routes here
// Add routes, both API, view, and Auth Routes
app.use(routes);
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
/* ---------------Startup Sequence--------------- */
console.log("-----------Startup log------------\n")
//Connect to MongoDB then startup server
mongoose.connect('mongodb+srv://admin:stWNC101@cluster0-ow1oo.gcp.mongodb.net/test?retryWrites=true&w=majority', ()=>{
  console.log('\n\n====> Connected to MongoDB <====\n\n')
  //Set server to start Listening
  app.listen(PORT, () => {
    console.log(`====> API server now running on port ${PORT} <====`+"\n\n");
    console.log("-----------End of Startup log------------\n")
  });
})
/* ---------------End of Startup Sequence--------------- */