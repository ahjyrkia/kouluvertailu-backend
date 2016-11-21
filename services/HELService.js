"use strict";
const express = require('express');
const request = require("request-promise");

class HELService {

  getSchool(id) {
    const options = {
      method: "GET",
      uri: "http://www.hel.fi/palvelukarttaws/rest/v2/unit/"+id
    }
    return request(options);
  }
}
module.exports = new HELService();
