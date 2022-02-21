const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Must be more than 3 characters!"]
    },
    price: {
        type: Number,
        required: [true, "It's not free! Must be at least $2!"]
    },
    description: {
        type: String,
        required: [true, "Must be at least 3 characters!"]
    }
}, { timestamps: true});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;