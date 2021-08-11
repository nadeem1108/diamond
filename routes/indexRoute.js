const express = require("express");
const router = express.Router();

// ------------------- List of all Route paths --------------------
router.use("/product", require("./productRoute"));
router.use("/category", require("./CategoryRoute"));
router.use("/vehicle", require("./vehicleRoute"));
router.use("/brand", require("./brandRoute"));
router.use("/cart", require("./cartRoute"));

router.use("/admin", require("./adminRoutes"));
router.use("/user", require("./userRoute"));
// ------------------- Exporting --------------------
module.exports = router;
