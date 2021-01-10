const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product: {
        type: String,
        required: [true, "A product must have a name"]
    },
    price: {
        type: Number,
        required: [true, "A product must have a price"]
    },
    quantity: {
        type: Number,
        required: [true, "A product must have a quantity"],
        default: 1
    },
    store: {
        type: String,
        required: [true, "A product must have a store name"]
    }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;