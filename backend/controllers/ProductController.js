const Product = require('../models/Product');

module.exports = {
    async getProducts(req, res) {
        try {
            const allProducts = await Product.findAll();

            if (allProducts.length <= 0) {
                return res.status(401).json({
                    message: 'Nenhum produto encontrado.'
                });
            } else {
                return res.status(200).json(allProducts);
            }
        } catch (error) {
            res.status(500).json({
                message: 'Erro ao encontrar produtos.',
                error: error
            });
        }
    },

    async createProduct(req, res) {
        try {
            const { name, description, price } = req.body;

            if (!name || !description || !price) {
                return res.status(500).json({
                    message: 'Informações incompletas.'
                });
            } else {
                const newProduct = await Product.create({ name, description, price });

                return res.status(200).json({
                    message: 'Produto cadastrado com sucesso.',
                    product: newProduct
                });
            }
        } catch (error) {
            res.status(500).json({
                message: 'Erro ao cadastrar produtos.',
                error: error
            });
        }
    },

    async updateProduct(req, res) {

    },

    async deleteProduct(req, res) {

    }
}