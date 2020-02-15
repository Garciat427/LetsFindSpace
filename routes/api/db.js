const router = require("express").Router();
const dbController = require("../../controllers/dbController");


// Matches with "/api/db"

router.route("/createCode")
  .get(dbController.createCode)
  .post(dbController.createCode);

module.exports = router;
