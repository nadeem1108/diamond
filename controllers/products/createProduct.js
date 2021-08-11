const ProductDB = require("../../modules/productModel");

// ------------------- Load input validations ------------------------
const validateRegisterInput = require("../../validations/productValidation");


module.exports = (req, res, next) => {

   // -------------- Check Validation --------------------
   const { error, isValid } = validateRegisterInput(req.body);

   if (!isValid) {
     return res.status(400).json(error);
   }

     // -------------------------- Create ----------------------------------

  const {
    name,
    price,
    image,
    desc,
    subDesc,
    qty,
    vehicleFitment,
    partNumber,
    stockStatus,
    brand,
    status,
  } = req.body;

  const product = new ProductDB({
    name,
    price,
    image,
    desc,
    subDesc,
    qty,
    vehicleFitment,
    partNumber,
    stockStatus,
    brand,
    status,
  });
  product
    .save()

    .then((data) => {
      res.status(201).json({
        msg: "Product added successfully",
        data: data,
      });
    })

    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating product",
      });
    });
};
