const { check, validationResult } = require('express-validator/check');
const User = require('../models/User');

/**
 * Request body validation rules
 */
exports.validationRules = [
    check('email').isEmail().withMessage('Please provide a valid email')
];


/**
 * Validates user login data
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {*} [Response object]
 */
exports.validateLogin = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    next();
}

/**
 * Logs in a user
 * @param {Object} req
 * @param {Object} res
 * @returns {*} [Response object]
 */
exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && await user.passwordMatch(password)) {
        return res.json({
            message: 'Login Successful',
            user: { ...user.toJSON(), password: undefined, avatar: user.avatar || user.gravatar },
            token: {
                value: user.generateJWT(),
                expiry: Date.now() + parseInt(process.env.TOKEN_EXPIRATION, 10)
            }
        });
    }

    return res.status(401).json({ message: 'Invalid email/password' });
}