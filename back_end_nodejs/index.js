const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require("path");
const cors = require("cors");
const { error } = require("console");
const product = require("./routes/product.js");
const user = require("./routes/user.js")
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://bduchuy2002:huypro123@cluster0.dabnfgo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

// bduchuy2002
// huypro123
    // mongodb+srv://bduchuy2002:huypro123@cluster0.dabnfgo.mongodb.net
// /? retryWrites = true & w=majority & appName=Cluster0
app.get("/", (req, res) => {
    res.send("Express App is Running");
})

//Image storage 
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({ storage: storage });



//Creating Upload Endpoint for images
app.use('/images',express.static('upload/images'))
app.post("/upload", upload.single('product'), (req,res) => {
    res.json({
        success: 1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})


app.use("/v1/product", product);
app.use("/v1/user", user);
app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on Port : " + port) 
    } else {
        console.log("Error : " + error);
    }
})
