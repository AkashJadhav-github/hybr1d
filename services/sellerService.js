const Catalog = require('../models/catalogModel');
const Order = require('../models/orderModel');

module.exports = {
    create: async (name, sellerId, products) => {
        let result = await Catalog.create({ name, sellerId, products });
        return result;
    },

    getAllOrders: async (sellerId) => {
        let orders = await Order.find({ sellerId });
        
        // console.log(orders)
        // let sellerCatalogProducts = await Catalog.findOne({ sellerId }).select({ products: 1, _id: 0 });
        // sellerCatalogProducts = sellerCatalogProducts.products;

        // for (let i = 0; i < orders.length; i++) {
        //     let detailProductsArray = [];
        //     let productsId = orders[i].productsId;
        //     // var result = productsId.filter(function (o1) {
        //     //     return !sellerCatalogProducts.some(function (o2) {
        //     //         return "new ObjectId("+o1+")" == o2._id; // return the ones with equal id
        //     //    });
        //     // });

        //     var result = sellerCatalogProducts.filter(function (o1) {
        //         return !productsId.some(function (o2) {
        //             console.log(`new ObjectId("${o2}")`, o1._id)
        //             return `new ObjectId("${o2}")` === o1._id; // return the ones with equal id
        //        });
        //     });
            
        // }

        // console.log("result here -> ", result)


        return orders;
    }
}