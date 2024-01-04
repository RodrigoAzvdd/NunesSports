const express = require('express');
const ProductController = require('../controllers/ProductController');
const productsRouter = express.Router();

productsRouter.get('/', ProductController.getProducts);
productsRouter.post('/', ProductController.createProduct);
productsRouter.put('/:productId', ProductController.updateProduct);
productsRouter.delete('/:productId', ProductController.deleteProduct);

module.exports = productsRouter;