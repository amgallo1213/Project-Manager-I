const ProductsController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post("/api/product", ProductsController.createProduct);
    app.get("/api/product/:id", ProductsController.findOneProduct);
    app.get("/api/products", ProductsController.findAllProducts);
}