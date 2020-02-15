const router = require("express").Router();
const generalController = require("../../controllers/generalController");


// Matches with "/api/general"

router.route("/getCo")
  .post(generalController.getCo);

module.exports = router;
