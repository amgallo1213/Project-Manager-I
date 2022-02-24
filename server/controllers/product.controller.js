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
    },
    updateOneProduct: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id},
            req.body,
            { new: true, runValidators: true}
            )
            .then(updatedProduct => {
                console.log(updatedProduct);
                res.json(updatedProduct)
            })
            .catch((err) => {
                console.log("Something went wrong in Update Product");
                res.status(400).json(err)
            })
    },
    deleteProduct: (req, res) => {
        Product.delete({_id: req.params.id})
            .then((deletedProduct) => {
                console.log(deletedProduct);
                res.json(deletedProduct)
            })
            .catch((err) => {
                console.log("Delete One Product has failed");
                res.json({message: "Something went wrong in Delete Product", error: err})
            })
    }
}