const router = require("express").Router();
const testController = require("../../controllers/testController");

// Matches with "/api/test/1"
router.route("/1")
  .post(testController.test1);

// Matches with "/api/test/2"
router.route("/2")
  .get(testController.test2);

module.exports = router;