// server/models/userModel.js
const mongoose = require('mongoose');
const User = require('./userModel');
const Schema = mongoose.Schema;

const CatalogSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    products: {
        type: [{
            name: String,
            price: Number
        }],
        require: true
    }
}, {timestamps: true});

CatalogSchema.index({"products.name" : 1})
CatalogSchema.index({ sellerId: 1 }, { unique: true });

const Catalog = mongoose.model('catalog', CatalogSchema);

module.exports = Catalog;
