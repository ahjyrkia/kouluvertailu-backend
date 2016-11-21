'use strict'

const HELService = require('../services/HELService')
const School = require("../models/School");
const db = require("../db/methods")

module.exports.findSchool = (req, res) => {
    HELService
        .getSchool(req.params.id)
        .then(address => {
            res.status(200).send(address);
        })
};

module.exports.findFromDBSchool = (req, res) => {
    var asd = School.findAll();
    School.findAll(schools => { console.log(schools) })
};
