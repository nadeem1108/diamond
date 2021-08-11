const VehicleDB = require("../../modules/vehicleModel");

// ------------------- Load input validations ------------------------
const validateRegisterInput = require("../../validations/vehicleValidation");

module.exports = (req, res, next) => {
  // -------------- Check Validation --------------------
  const { error, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(error);
  }

  // -------------------------- Create ----------------------------------

  const { name, model, year } = req.body;

  const vehicle = new VehicleDB({
    name,
    model,
    year,
  });
  vehicle
    .save()

    .then((data) => {
      res.status(201).json({
        msg: "vehicle added successfully",
        data: data,
      });
    })

    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating vehicle",
      });
    });
};
