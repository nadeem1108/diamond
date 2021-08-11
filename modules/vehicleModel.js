const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  brandObjectId: {
    type: String,
  },

  name: {
    type: String,
    require: true,
  },

  model: {
    type: String,
  },

  year: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  status: {
    type: String,
    require: true,
    default: 0,
  },
});

const VehicleDB = mongoose.model("VehicleDB", vehicleSchema);

module.exports = VehicleDB;
