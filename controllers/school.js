'use strict'

const HELService = require('../services/HELService')
const School = require("../models/School");
const db = require("../db/methods")

module.exports.findSchool = (req, res) => {
    HELService
        .getSchool(req.params.id)
        .then(school => {
            res.status(200).send(school);
        })
};

module.exports.findSchoolFromDB = (req, res) => {
    var asd = School.findAll();
    School.findOne(req.params.id).then(school => {
        console.log(school)
        res.status(200).send(school);
    })
};
