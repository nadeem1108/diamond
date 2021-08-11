const CategoryDB = require("../../modules/categoryModel");

// ------------------- Load input validations ------------------------
const validateRegisterInput = require("../../validations/categoryValidation");

module.exports = (req, res, next) => {

  // -------------- Check Validation --------------------
  const { error, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(error);
  }

  // -------------------------- Create ----------------------------------

  const { type, name, desc, image } = req.body;

  const category = new CategoryDB({
    type,
    name,
    desc,
    image,
  });
  category
    .save()

    .then((data) => {
      res.status(201).json({
        msg: "Category added successfully",
        data: data,
      });
    })

    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating category",
      });
    });
};
