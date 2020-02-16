const router = require("express").Router();
const generalController = require("../../controllers/generalController");

router.route("/getMidpoint").post(generalController.getMidpoint);

router.route("/getGeo").post(generalController.getGeo);

module.exports = router;
