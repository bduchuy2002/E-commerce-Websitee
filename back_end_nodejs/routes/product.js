const express = require("express");
const router = express.Router();
const bookingControllers = require("../controllers/productControllers"); // Updated import

router.post("/addproduct", bookingControllers.addproduct);
router.post("/deleteproduct", bookingControllers.deleteproduct);
router.get("/getallproduct", bookingControllers.getallproduct);
module.exports = router;
