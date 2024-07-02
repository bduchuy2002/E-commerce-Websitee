const { Product, Users } = require("../models/model");
const jwt = require('jsonwebtoken');

const productControllers = {
    //Api add Product
    addproduct: async (req, res) => {
        let products = await Product.find({});
        let id;
        if (products.length > 0) {
            let last_product_array = products.slice(-1);
            let last_product = last_product_array[0];
            id = last_product.id+1
        }else{
            id = 1;
        }
        try {
            const product = new Product({
                id: id,
                name: req.body.name,
                image: req.body.image,
                category: req.body.category,
                new_price: req.body.new_price,
                old_price: req.body.old_price,
            });
            console.log(product);
            await product.save();
            console.log("SAVED");
            res.json({
                success: true,
                name: req.body.name,
        
            });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // api delete Product
    deleteproduct: async (req, res)=>{
        await Product.findOneAndDelete({ id: req.body.id });
        console.log("Removed");
        res.json({
            success: true,
            name:req.body.name,
        })
    },
    //Api Getting all products
    getallproduct: async (req, res) => {
        let products = await Product.find({});
        console.log("ALL PRODUCTS");
        res.send(products);
    },
    newcollections: async (req, res) => {
        let products = await Product.find({});
        let newcollection = products.slice(1).slice(-8);
        console.log("NewCollection Fetched");
        res.send(newcollection);
    },
    popularwomen: async (req, res) => {
        let products = await Product.find({ category: "women" });
        let popular_in_women = products.slice(0, 4);
        console.log("Popular in women fetched");
        res.send(popular_in_women);

    },
    removefromcart: async (req, res) => {
        let userData = await Users.findOne({ _id: req.user.id });
        if(userData.cartData[req.body.itemId]>0)
        userData.cartData[req.body.itemId] -= 1;
        await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
        res.send("Removed");
    },
    addtocart: async (req, res) => {
        console.log(req.body, req.user);
        let userData = await Users.findOne({ _id: req.user.id });
        userData.cartData[req.body.itemId] += 1;
        await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
        res.send("Added");
    },
    getcart: async (req, res) => {
        let userData = await Users.findOne({ _id: req.user.id });
        res.json(userData.cartData);

    },
    //middleware
    fetchUser: async (req, res, next) => {
        const token = req.header('auth-token');
        console.log(token)
        if (!token) {
            res.status(401).send({errors:"Please authenticate using a valid token"})
        } else {
            try {
                const data = jwt.verify(token, 'secret_ecom');
                console.log(data);
                req.user = data.user;
                next();
            } catch(error) {
                res.status(401).send({ errors: "Please authenticate using a valid token" });
            }
        }
    },


};

module.exports = productControllers;
