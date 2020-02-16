const router = require("express").Router();
const generalController = require("../../controllers/generalController");

router.route("/getGeo").post(generalController.getGeo);

router.route("/getMidpoint").post(generalController.getMidpoint);

module.exports = router;
