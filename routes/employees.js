const uuidv4 = require("uuid").v4;
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const validation = require("../lib/input_validations");
const clientModel = require("../models/clientModel");

router.post("/list", async (req, res) => {
  //generate client fundementals
  let { client_name } = req.body;
  //employees
  res.json({ employees: [] });
});

module.exports = router;
