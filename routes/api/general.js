const router = require("express").Router();
const generalController = require("../../controllers/generalController");

router.route("/getGeo")
   .post(generalController.getGeo);

router.route("/midpoint")
   .post(generalController.midpoint);
   
module.exports = router;
