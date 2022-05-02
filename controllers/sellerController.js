const sellerService = require('../services/sellerService');

module.exports = {
    create: async (req, res, next) => {
        try {
            const { name, sellerId, products } = req.body;
            if (!name && !sellerId && !products) return next(new Error('Error in parameters!'));

            // service
            let result = await sellerService.create(name, sellerId, products);

            res.status(200).json({
                data: result
            })
        } catch (error) {
            next(error);
        }
    },

    getAllOrders: async (req, res, next) => {
        try {
            const sellerId = req.query.seller_id;
            if (!sellerId) return next(new Error('Invalid parameters!'));

            // service
            let result = await sellerService.getAllOrders(sellerId);

            res.status(200).json({
                data: result
            })
        } catch (error) {
            next(error);
        }
    }
}