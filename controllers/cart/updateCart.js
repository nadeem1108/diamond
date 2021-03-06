const CartDB = require("../../modules/cartModel");

module.exports = (req, res, next) => {
  
  


  CartDB.findByIdAndUpdate(req.params.id, req.body,{upsert:true,new:true})
    .then((data) => {
      if (!data) {
        res
          .status(400)
          .send({ message: "error whie finding data" });
      } else {
        res.status(200).json({
          msg: "Data Updated successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "error update information" });
    });
};
