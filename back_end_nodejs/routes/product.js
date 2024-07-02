const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/productControllers"); // Updated import

router.post("/addproduct", productControllers.addproduct);
router.post("/deleteproduct", productControllers.deleteproduct);
router.get("/getallproduct", productControllers.getallproduct);
router.get("/newcollections", productControllers.newcollections);
router.get("/popularwomen", productControllers.popularwomen);
router.post("/addtocart", productControllers.fetchUser, productControllers.addtocart);
router.post("/removefromcart", productControllers.fetchUser, productControllers.removefromcart);
router.post("/getcart", productControllers.fetchUser, productControllers.getcart);

module.exports = router;
