const CartDB = require("../../modules/cartModel");
module.exports = (req, res) => {
  if (req.params.id) {
    CartDB.findById(req.params.id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Cart may not present`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error while retriving the data" });
      });
  } else {
    CartDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
