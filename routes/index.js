const router = require("express").Router();
const apiRoutes = require("./api");
//const auth = require("./authRoutes")

// API Routes (For MongoDB Routes)
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app


module.exports = router;
