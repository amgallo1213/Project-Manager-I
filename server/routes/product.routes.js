const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post("/api/product", ProductController.createProduct);
    app.get("/api/product/:id", ProductController.findOneProduct);
    app.get("/api/products", ProductController.findAllProducts);
    app.put("/api/product/:id", ProductController.updateOneProduct);
    app.delete("/api/product/:id", ProductController.deleteProduct)
}