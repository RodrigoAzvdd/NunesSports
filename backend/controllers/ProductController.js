const Product = require('../models/Product');

module.exports = {
    async getProducts(req, res) {
        try {
            const allProducts = await Product.findAll();

            if (allProducts.length === 0) {
                return res.status(404).json({
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
                message: 'Erro ao cadastrar produto.',
                error: error
            });
        }
    },

    async updateProduct(req, res) {
        try {
            const { name, description, price } = req.body;
            const { productId } = req.params;

            if (!name || !description || !price) {
                return res.status(500).json({
                    message: 'Informações incompletas.'
                });
            } else {
                const productToUpdate = await Product.findByPk(productId);

                await productToUpdate.update({ name, description, price });

                return res.status(200).json({
                    message: 'Produto atualizado com sucesso.'
                });
            }
        } catch (error) {
            res.status(500).json({
                message: 'Erro ao atualizar produto.',
                error: error
            });
        }
    },

    async deleteProduct(req, res) {
        try {
            const { productId } = req.params;

            if (!productId) {
                return res.status(500).json({
                    message: 'Informações incompletas.'
                });
            } else {
                await Product.destroy(productId);

                return res.status(200).json({
                    message: 'Produto deletado com sucesso.'
                });
            }
        } catch (error) {
            res.status(500).json({
                message: 'Erro ao deletar produto.',
                error: error
            });
        }
    }
}