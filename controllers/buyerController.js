const buyerServices = require('../services/buyerService');

module.exports = {
    getSellers: async (req, res, next) => {
        try {
            // services
            let sellers = await buyerServices.getSellers();

            res.status(200).json({
                data: sellers
            });
        } catch (error) {
            next(error)
        }
    },

    getSellerCatalog: async (req, res, next) => {
        try {
            const sellerId = req.params.seller_id;
            if (!sellerId) return next(new Error('Please provide valid seller id'));

            // service
            let result = await buyerServices.getSellerCatalog(sellerId);

            res.status(200).json({
                data: result
            });
        } catch (error) {
            next(error)
        }
    },

    createOrder: async (req, res) => {
        try {
            const { buyerId, sellerId, productsId } = req.body;
            if (!buyerId && !sellerId && !productsId) return next(new Error('Please provide valid parameters'));

            // service
            let result = await buyerServices.createOrder(buyerId, sellerId, productsId);

            res.status(200).json({
                data: result
            });
        } catch (error) {
            next(error)
        }
    }
}