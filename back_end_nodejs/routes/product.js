const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/productControllers"); // Updated import

router.post("/addproduct", productControllers.addproduct);
router.post("/deleteproduct", productControllers.deleteproduct);
router.get("/getallproduct", productControllers.getallproduct);
module.exports = router;
