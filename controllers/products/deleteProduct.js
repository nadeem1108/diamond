const ProductDB = require("../../modules/productModel");

module.exports = (req, res) => {
  const id = req.params.id;

  ProductDB
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete, Something is wrong` });
      } else {
        res.send({
          message: "Product was deleted successfully!",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Product",
      });
    });
};
