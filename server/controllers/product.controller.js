const Product = require('../models/product.model');

module.exports = {
    createProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => {
                console.log(newProduct);
                res.json(newProduct)
            })
            .catch((err) => {
                console.log("Something went wrong in Create New Product");
                res.status(400).json(err)
            })
    },
    findAllProducts: (req, res) => {
        Product.find({})
            .then((allProducts) => {
                console.log(allProducts);
                res.json(allProducts);
            })
            .catch((err) => {
                console.log("Find All Products failed");
                res.json({message: "Something went wrong in Find All Products", error: err})
            })
    },
    findOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then((oneProduct) => {
                console.log(oneProduct);
                res.json(oneProduct)
            })
            .catch((err) => {
                console.log("Find One Product has failed");
                res.json({message: "Something went wrong in Find One Product", error: err})
            })
    }
}