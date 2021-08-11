var express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//  Add Controllers
const adminSignup = require("../controllers/admin/adminSignup");
const adminLogin = require("../controllers/admin/adminLogin");

const adminFindOne = require("../controllers/admin/adminFindOne");
const adminUpdate = require("../controllers/admin/adminUpdate");


//  Routes

router.get("/find/:id", auth, adminFindOne);
router.put("/update/:id", auth, adminUpdate);


//  User Logins
router.post("/login", adminLogin);
router.post("/signup", adminSignup);

module.exports = router;
