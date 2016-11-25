"use strict";

const express = require("express");
const router = new express.Router();


const schoolCtrl = require("../controllers/school");


router.get("/school/:id", schoolCtrl.findSchool)
router.get("/school/db/:id", schoolCtrl.findSchoolFromDB)

module.exports = router;
