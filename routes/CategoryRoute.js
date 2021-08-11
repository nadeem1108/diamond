const express = require("express");
const router = express.Router();

//------------------ middleware ------------------------
const auth = require("../middleware/auth");

// ------------------- Controllers --------------------
const categoryCreate = require("../controllers/category/createcategory");
const categoryFindAll = require("../controllers/category/findAllcategory");
const categoryFindOne = require("../controllers/category/findOnecategory");
const categoryUpdate = require("../controllers/category/updatecategory");
const categoryDelete = require("../controllers/category/deletecategory");

// ------------------- Routes --------------------
router.post("/create", auth, categoryCreate);
router.get("/find", categoryFindAll);
router.get("/find/:id", categoryFindOne);
router.put("/update/:id", auth, categoryUpdate);
router.delete("/delete/:id", auth, categoryDelete);

// ------------------- Exporting --------------------
module.exports = router;
