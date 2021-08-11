const express = require("express");
const router = express.Router();

//------------------ middleware ------------------------
const auth = require("../middleware/auth");

// ------------------- Controllers --------------------
const vehicleCreate = require("../controllers/vehicle/createvehicle");
const vehicleFindAll = require("../controllers/vehicle/findAllvehicle");
const vehicleFindOne = require("../controllers/vehicle/findOnevehicle");
const vehicleUpdate = require("../controllers/vehicle/updatevehicle");
const vehicleDelete = require("../controllers/vehicle/deletevehicle");

// ------------------- Routes --------------------
router.post("/create", auth, vehicleCreate);
router.get("/find", vehicleFindAll);
router.get("/find/:id", vehicleFindOne);
router.put("/update/:id", auth, vehicleUpdate);
router.delete("/delete/:id", auth, vehicleDelete);

// ------------------- Exporting --------------------
module.exports = router;
