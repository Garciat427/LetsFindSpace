const router = require("express").Router();
const dbController = require("../../controllers/dbController");

// Matches with "/api/db"

router.route("/createGroup").post(dbController.createGroup);

router.route("/joinGroup").post(dbController.joinGroup);

router.route("/refreshGroup").post(dbController.refreshGroup);

module.exports = router;
