const mongoose = require("mongoose");


// const bookingSchema = new mongoose.Schema({
//     idCustomer: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Customer",
//         required: true
//     },
//     idCoffee: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Coofee",
//         required: true
//     },
//     name:{
//         type: String,
//         required: true
//     },
//    address:{
//         type: String,
//         required: true
//     },
        
//     date: {
//         type: String,
//         required: true
//     },
//     time: {
//         type: String,
//        required: true
//     },
    
//     tableBooking:[{
//         type: String,
        
//         required: true
//     }]
    
    

// });
const product = mongoose.Schema( {
    id: {
        type: Number,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    new_price: {
        type: Number,
        require: true,
    },
    old_price: {
        type: Number,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },

});


let Product = mongoose.model("Product", product);


module.exports = {Product};