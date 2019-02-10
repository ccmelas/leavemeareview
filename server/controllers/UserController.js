/**
 * Returns a user's profile information
 * @param {Object} req
 * @param {Object} res
 * @returns {*} [Response object]
 */
exports.profile = (req, res) => {
    res.json({ user: req.user });
};