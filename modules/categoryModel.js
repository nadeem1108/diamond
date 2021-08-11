const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  
  name: {
    type: String,
  },

  image: {
    type: String,
  },
  
  desc: {
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

const CategoryDB = mongoose.model("CategoryDB", categorySchema);
module.exports = CategoryDB;
