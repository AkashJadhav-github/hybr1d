// server/models/userModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: Boolean,
        required: true,
        default: 0
    },
    accessToken: {
        type: String
    }
}, {timestamps: true});

const User = mongoose.model('user', UserSchema);

module.exports = User;
