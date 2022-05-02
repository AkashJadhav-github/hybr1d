const Catalog = require('../models/catalogModel');
const Order = require('../models/orderModel');
const User = require('../models/userModel');

module.exports = {
    getSellers: async () => {
        const sellers = await User.find({ type: 1 }).select({ "username": 1 });
        return sellers;
    },

    getSellerCatalog: async (sellerId) => {
        const catalog = await Catalog.findOne({ sellerId });
        return catalog;
    },

    createOrder: async (buyerId, sellerId, productsId) => {
        const result = await Order.create({buyerId, sellerId, productsId});
        return result;
    }
}