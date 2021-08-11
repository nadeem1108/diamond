const express = require("express");
const router = express.Router();

//------------------ middleware ------------------------
const auth = require("../middleware/auth");


// ------------------- Controllers --------------------
const productCreate = require("../controllers/products/createProduct");
const productFindAll = require("../controllers/products/findAllProduct");
const productFindOne = require("../controllers/products/findOneProduct");
const productUpdate = require("../controllers/products/updateProduct");
const productDelete = require("../controllers/products/deleteProduct");

// ------------------- Routes --------------------
router.post("/create",auth, productCreate);
router.get("/find", productFindAll);
router.get("/find/:id", productFindOne);
router.put("/update/:id",auth, productUpdate);
router.delete("/delete/:id",auth, productDelete);

// ------------------- Exporting --------------------
module.exports = router;
