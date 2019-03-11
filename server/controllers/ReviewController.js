const Review = require('../models/Review');
const User = require('../models/User');

/**
 * Returns a user's review data
 * @param {Object} req
 * @param {Object} res
 * @returns {*} [Response object]
 */
exports.index = async (req, res) => {
    const reviews = await Review.find({ owner: req.user._id }).populate('reviewer');
    res.json({ reviews });
};

/**
 * Returns a user's single review data
 * @param {Object} req
 * @param {Object} res
 * @returns {*} [Response object]
 */
exports.show = async (req, res) => {
    const review = await Review.findOne({ owner: req.user._id, _id: req.params.id })
                                .populate('reviewer');
    res.json({ review });
};

/**
 * Validates review creation
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {*} [Response object]
 */
exports.validateStore = async (req, res, next) => {
    const errors = [];

    const required = ['rating', 'text', 'owner'];

    required.forEach(field => {
        if (!req.body[field])
            errors.push(`${field} is required`);
    });

    if (req.body.owner && !await User.findById(req.body.owner)) {
        errors.push(`The user you want to review does not exists`);
    }

    if (errors.length) {
        return res.status(422).json({ message: 'Validation errors', errors });
    }

    next();
}

/**
 * Creates a new review
 * @param {Object} req
 * @param {Object} res
 * @returns {*} [Response object]
 */
exports.store = async (req, res) => {
    
    req.body.reviewer = req.user._id;

    const review = await Review.create(req.body);
    
    res.json({ review: review.populate('reviewer') });
};
