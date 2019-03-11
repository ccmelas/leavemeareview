const { check, validationResult } = require('express-validator/check');
const User = require('./../models/User');

exports.registerRules = [
    check('email').isEmail().withMessage('Please provide a valid email'),
    check('password').isLength({ min: 6}).withMessage('Must be at least 6 chars long')
];

/**
 * Validates user registration
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {*} [Response object]
 */
exports.validateRegister = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ message: 'Validation errors', errors: errors.array() });
    }
    next();
}

/**
 * Ensures email does not already exist
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {*} [Response object]
 */
exports.uniqueEmail = async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
        const error = { msg: 'User with that email already exists'};
        return res.status(422).json({ errors: [error]})
    }

    next();
}

/**
 * Registers a user with email and password
 * @param {Object} req
 * @param {Object} res
 * @returns {*} [Response object]
 * 
 */
exports.register = async (req, res) => {
    const user = await User.create(req.body);
    res.json ({
        message: 'Registration Successful',
        user: { ...user.toJSON(), password: undefined, avatar: user.avatar || user.gravatar },
        token: {
            value: user.generateJWT(),
            expiry: Date.now() + parseInt(process.env.TOKEN_EXPIRATION, 10)
        }
    });
}