const BrandDB = require("../../modules/brandModel");

module.exports = (req, res) => {
  const id = req.params.id;

  BrandDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete. Something is wrong` });
      } else {
        res.send({
          message: "Brand was deleted successfully!",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete brand",
      });
    });
};
