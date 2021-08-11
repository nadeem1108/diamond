const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegisterInput(data) {
  let error = {};

  data.name = !isEmpty(data.name) ? data.name : "";

  if (Validator.isEmpty(data.name)) {
    error.name = "name field is required";
  }
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    error.name = " Name must be between 2 to 30 characters";
  }

  return {
    error,
    isValid: isEmpty(error),
  };
};
