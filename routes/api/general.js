const router = require("express").Router();
const generalController = require("../../controllers/generalController");


// Matches with "/api/general"

router.route("/getGeo")
   .post(generalController.getGeo);

router.route("/midpoint")
   .post(generalController.midpoint);
   
module.exports = router;
