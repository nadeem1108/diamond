const express = require("express");
const router = express.Router();

// ------------------- Middlewares --------------------
const auth = require("../middleware/auth")

// ------------------- Controllers --------------------
const brandCreate = require("../controllers/brand/createbrand");
const brandFindAll = require("../controllers/brand/findAllbrand");
const brandFindOne = require("../controllers/brand/findOnebrand");
const brandUpdate = require("../controllers/brand/updatebrand");
const brandDelete = require("../controllers/brand/deletebrand");

// ------------------- Routes --------------------
router.post("/create",auth, brandCreate);
router.get("/find", brandFindAll);
router.get("/find/:id", brandFindOne);
router.put("/update/:id",auth, brandUpdate);
router.delete("/delete/:id",auth, brandDelete);

// ------------------- Exporting --------------------
module.exports = router;
