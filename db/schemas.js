const mongoose = require("./db_connection");

const Schema = mongoose.Schema;


const SchoolSchema = new Schema({
  ranking: { type: String},
  mean: { type: String, required: true },
  participants: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  coords: { type: String, required: true },
  linjat: { type: Array, required: false },
});

module.exports = {
  School: mongoose.model("School", SchoolSchema),
};
