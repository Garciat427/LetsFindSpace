const router = require("express").Router();
const dbController = require("../../controllers/dbController");


// Matches with "/api/db"

router.route("/createGroup")
  .get(dbController.createGroup)
  .post(dbController.createGroup);

module.exports = router;
