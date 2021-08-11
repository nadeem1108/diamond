const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  brandObjectId: {
    type: String,
  },

  vehicleObjectId: {
    type: String,
  },

  name: {
    type: String,
    require: true,
  },

  image: {
    type: String,
  },

  price: {
    type: String,
    require: true,
  },

  desc: {
    type: String,
  },

  subDesc: {
    type: String,
  },

  qty: {
    type: String,
  },

  vehicleFitment: {
    type: String,
  },

  partNumber: {
    type: String,
  },

  stockStatus: {
    type: String,
  },

  brand: {
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

const ProductDB = mongoose.model("ProductDB", productSchema);

module.exports = ProductDB;
