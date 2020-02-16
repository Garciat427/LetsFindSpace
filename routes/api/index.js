const router = require("express").Router();
const db = require("./db");
const general = require("./general");

router.use("/db", db);
router.use("/general", general);

module.exports = router;
