const BrandDB = require("../../modules/brandModel");

module.exports = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    BrandDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Brand may not present`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error while retriving the data" });
      });
  } else {
    BrandDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
