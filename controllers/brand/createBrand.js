const BrandDB = require("../../modules/brandModel");

// ------------------- Load input validations ------------------------
const validateRegisterInput = require("../../validations/brandValidation");

module.exports = (req, res, next) => {
  // -------------- Check Validation --------------------
  const { error, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(error);
  }

  // -------------------------- Create ----------------------------------

  const { name } = req.body;

  const brand = new BrandDB({
    name,
  });
  brand
    .save()

    .then((data) => {
      res.status(201).json({
        msg: "Brand added successfully",
        data: data,
      });
    })

    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating brand",
      });
    });
};
