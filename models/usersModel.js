// server/models/userModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    accessToken: {
        type: String
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
