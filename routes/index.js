var express = require("express");
var router = express.Router();
var employees = require("./employees");
var auth = require("./auth");

router.use("/employees", employees);
router.use("/auth", auth);

module.exports = router;
