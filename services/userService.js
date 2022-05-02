const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

module.exports = {
    signup: async (username, password, type) => {
        const newUser = new User({username, password, type});
        const accessToken = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });
        newUser.accessToken = accessToken;
        await newUser.save();
        return {newUser, accessToken};
    },

    login: async (user) => {
        const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });
        await User.findByIdAndUpdate(user._id, { accessToken })
        return accessToken;
    },
}