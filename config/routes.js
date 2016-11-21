"use strict";

const express = require("express");
const router = new express.Router();

const auth = require("../middleware/authentication");
const validate = require("../middleware/validateBody");
const errorHandler = require("../middleware/errorHandler");

const schoolCtrl = require("../controllers/school");


router.get("/school/:id", schoolCtrl.findFromDBSchool)
// router.get()

module.exports = router;
