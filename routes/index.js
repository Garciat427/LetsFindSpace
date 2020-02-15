const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
<<<<<<< HEAD
//const auth = require("./authRoutes")

// API Routes (For MongoDB Routes)
router.use("/api", apiRoutes);

//Auth Routes
//router.use("/auth", auth)

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
=======

router.route("/addNumbers")
  .post(
     
  );
>>>>>>> a5b5d6d2e90caa42a4cf350a5c598d11c56cf638
