const User = require('../models/User');

/**
 * Returns an authenticated user's profile information
 * @param {Object} req
 * @param {Object} res
 * @returns {*} [Response object]
 */
exports.profile = (req, res) => {
    res.json({ user: req.user });
};


/**
 * Returns a specified user's profile information
 * @param {Object} req
 * @param {Object} res
 * @returns {*} [Response object]
 */
exports.findUser = async (req, res) => {
    const { username } = req.query;
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(404).json({ message: `User with username, ${ username } not found`})
    }

    return res.json({ user });
};