var express = require("express");
const router = express.Router();

//------------------ middleware ------------------------
const auth = require("../middleware/auth");

//  Add Controllers
const cartCreate = require("../controllers/cart/createCart");
const cartFind = require("../controllers/cart/findAllCart");
const cartFindOne = require("../controllers/cart/findOnecart");
const cartUpdate = require("../controllers/cart/updateCart");
const cartDelete = require("../controllers/cart/DeleteCart");

//  Routes
router.post("/create", auth, cartCreate);
router.get("/find", auth, cartFind);
router.get("/find/:id", auth, cartFindOne);
router.put("/update/:id", auth, cartUpdate);
router.delete("/delete/:id", auth, cartDelete);

module.exports = router;
