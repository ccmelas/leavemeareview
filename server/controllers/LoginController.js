const { check, validationResult } = require('express-validator/check');
const User = require('../models/User');
const googleService = require('../services/google');

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
};

/**
 * Logs in a user
 * @param {Object} req
 * @param {Object} res
 * @returns {*} [Response object]
 */
exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    // Check if user exists, has a google ID but does not have a password
    if (user && !user.password && user.googleId) {
        return res.json({ message: 'Please login with google and set your password' }, 403);
    }

    if (user && await user.passwordMatch(password)) {
        return res.json({
            message: 'Login Successful',
            user: { ...user.toJSON(), password: undefined },
            token: {
                value: user.generateJWT(),
                expiry: Date.now() + parseInt(process.env.TOKEN_EXPIRATION, 10)
            }
        });
    }

    return res.status(401).json({ message: 'Invalid email/password' });
};

exports.getGoogleSignInUrl = (req, res) => {
    const url = googleService.getGoogleUrl();
    res.json({ url });
}

/**
 * Logs in a user through google
 * @param {Object} req
 * @param {Object} res
 * @returns {*} [Response object]
 */
exports.googleSignIn = async (req, res) => {
    const code = req.query.code;
    try {
        const data = await googleService.getGoogleAccountFromCode(code);

        const query = { email : data.user.email };
        const options = { upsert : true, new : true };

        const user = await User.findOneAndUpdate(query, data.user, options);
        
        return res.json({
            message: 'Login Successful',
            user: { ...user.toJSON(), password: undefined },
            token: {
                value: user.generateJWT(),
                expiry: Date.now() + parseInt(process.env.TOKEN_EXPIRATION, 10)
            }
        });

    } catch(e) {
        res.json({ error: e.message });
    }
};