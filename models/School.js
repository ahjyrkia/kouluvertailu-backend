"use strict";

const BaseModel = require("./BaseModel");

class School extends BaseModel {
  constructor() {
    super("School");
  }
}

module.exports = new School();
