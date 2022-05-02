// server/models/userModel.js
const mongoose = require('mongoose');
const Catalog = require('./catalogModel');
const User = require('./userModel');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    productsId: [{
        type: String,
        require: true
    }]
}, {timestamps: true});

const Order = mongoose.model('order', OrderSchema);

module.exports = Order;
