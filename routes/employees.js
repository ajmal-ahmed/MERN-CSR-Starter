const uuidv4 = require("uuid").v4;
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const validation = require("../lib/input_validations");
const clientModel = require("../models/clientModel");

const employeeList = [{
  id: 1,
  name: "John",
  position: "developer",
  email: "john@company.com"
}, {
  id: 1,
  name: "Sam",
  position: "developer",
  email: "sam@company.com"
}, {
  id: 1,
  name: "Kevin",
  position: "tester",
  email: "kevin@company.com"
}, {
  id: 1,
  name: "Alex",
  position: "developer",
  email: "alex@company.com"
},
{
  id: 1,
  name: "Peter",
  position: "developer",
  email: "peter@company.com"
}, {
  id: 1,
  name: "Williams",
  position: "tester",
  email: "will@company.com"
}
]

router.post("/list", async (req, res) => {
  // console.log("rep", req)
  let { search } = req.body;
  search = search ? search : "";
  let employees = employeeList.filter(employee => employee.name.toLowerCase().includes(search.toLowerCase()));
  res.json({ employees: employees });
});

module.exports = router;
