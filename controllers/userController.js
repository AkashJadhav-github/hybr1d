const userServices = require('../services/userService');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

module.exports = {
    signup: async (req, res, next) => {
        try {
            const { username, password, type } = req.body;
            const hashedPassword = await hashPassword(password);

            // services here
            const { newUser, accessToken } = await userServices.signup(username, hashedPassword, type);

            res.json({
                data: newUser,
                accessToken
            })
        } catch (error) {
            next(error)
        }
    },

    login: async (req, res, next) => {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username });
            if (!user) return next(new Error('Username does not exist'));
            const validPassword = await validatePassword(password, user.password);
            if (!validPassword) return next(new Error('Password is not correct'))

            // services
            let accessToken = await userServices.login(user);

            res.status(200).json({
                data: { username: user.username, role: user.role },
                accessToken
            })
        } catch (error) {
            next(error);
        }
    },
}


// helper functions
async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

async function validatePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
}