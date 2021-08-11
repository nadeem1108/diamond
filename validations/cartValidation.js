const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegisterInput(data) {
  let error = {};


  if (Validator.isEmpty(data.qty)) {
    error.qty = "qty field is required";
  }
  if (!Validator.isLength(data.qty, { min: 0 })) {
    error.qty = " qty must be between above 0";
  }

  return {
    error,
    isValid: isEmpty(error),
  };
};
