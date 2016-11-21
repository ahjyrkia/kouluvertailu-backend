"use strict";

const models = require("./schemas");

module.exports.destroyTables = () => {
    return Promise.all(Object.keys(models).map(key => {
        if ({}.hasOwnProperty.call(models, key)) {
            return models[key].remove();
        }
    }));
};

// module.exports.createTables = () => {
//   return tables.syncForce();
//   // return tables.sync();
// };

module.exports.dropTables = () => {
    return Promise.all(Object.keys(models).map(key => {
        if ({}.hasOwnProperty.call(models, key)) {
            let mongoose = require("./db_connection");
            // duh doesn't work :/
            return mongoose.connection.db.dropDatabase();
            // return mongoose.connection.collections["items"].drop();
        }
    }))
};


module.exports.dump = () => {
    return Promise.all(Object.keys(models).map(key => {
        if ({}.hasOwnProperty.call(models, key)) {
            return models[key].find({});
        }
    }));
};
