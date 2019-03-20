const Review = require('../models/Review');

/**
 * Returns a user's dashboard stats
 * @param {Object} req
 * @param {Object} res
 * @returns {*} [Response object]
 */
exports.index = async (req, res) => {
    const reviewCount = await Review.find({ owner: req.user._id }).count();

    const skip = reviewCount - 5;

    const reviews = await Review.find({ owner: req.user._id })
                                .skip(skip < 0 ? 0 : skip)
                                .limit(5)
                                .populate('reviewer');
    res.json({ reviews, reviewCount });
};