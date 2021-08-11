const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  objectId: {
    type: String,
  },
  
  name: {
    type: String,
    require: true,
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

const BrandDB = mongoose.model("BrandDB", brandSchema);

module.exports = BrandDB;
