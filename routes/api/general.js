const router = require("express").Router();
const generalController = require("../../controllers/generalController");


// Matches with "/api/general"

<<<<<<< Updated upstream
router.route("/getCo")
  .post(generalController.getCo);
=======
router.route("/test")
  .get(generalController.test)
  .post(generalController.test);
>>>>>>> Stashed changes

module.exports = router;
