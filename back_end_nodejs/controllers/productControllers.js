const { Product } = require("../models/model");

const bookingControllers = {
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
    }

};

module.exports = bookingControllers;
