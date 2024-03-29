const Product = require('../models/Product');

module.exports = {
    async getProduct(req, res) {
        try {
            const { productId } = req.params;
            const product = await Product.findByPk(productId);

            if (!product) {
                return res.status(401).json({
                    message: 'Nenhum produto econtrado.'
                });
            }

            return res.status(200).json({
                message: 'Produto localizado com sucesso.',
                product: product
            });
        } catch (error) {
            res.status(500).json({
                message: 'Erro ao encontrar produtos.',
                error: error
            });
        }
    },

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
        const { productId } = req.params;

        try {
            if (!productId) {
                return res.status(500).json({
                    id: productId,
                    message: 'Informações incompletas.'
                });
            } else {
                await Product.destroy({
                    where: {
                        id: productId
                    }
                });

                return res.status(200).json({
                    id: productId,
                    message: 'Produto deletado com sucesso.'
                });
            }
        } catch (error) {
            res.status(500).json({
                message: 'Erro ao deletar produto.',
                id: productId,
                error: error
            });
        }
    }
}