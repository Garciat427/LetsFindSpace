const router = require("express").Router();
const generalController = require("../../controllers/dbController");


// Matches with "/api/general"

router.route("/test")
  .get(dbController.test)
  .post(dbController.test);

module.exports = router;
