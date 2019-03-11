const Review = require('../models/Review');

/**
 * Returns a user's dashboard stats
 * @param {Object} req
 * @param {Object} res
 * @returns {*} [Response object]
 */
exports.index = async (req, res) => {
    const reviewCount = await Review.find({ owner: req.user._id }).count();
    const reviews = await Review.find({ owner: req.user._id })
                                .skip(reviewCount - 5)
                                .limit(5)
                                .populate('reviewer');
    res.json({ reviews, reviewCount });
};