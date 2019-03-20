const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const slugs = require('slugs');

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: 'Please provide a name',
        trim: true
    },
    username: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: 'Please provide an email',
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: String,
    avatar: String,
    googleId: String,
}, { toJSON: { virtuals: true, getters: true }});


UserSchema.virtual('gravatar').get(function() {
    const hash = md5(this.email);
    return `https://gravatar.com/avatar/${hash}?s=200`;
});

UserSchema.pre('save', async function(next) {
    const user = this;

    if (user.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    if (user.isModified('name')) {
        this.username = slugs(this.name);

        const usernameRegExp = new RegExp(`^(${this.username})((-[0-9]*?$))$`, 'i');

        const usersWithUsername = await this.constructor.find({ username: usernameRegExp });

        if (usersWithUsername.length) {
            this.username = `${this.username}-${usersWithUsername.length + 1}`;
        }
    }

    next();
});

UserSchema.methods.passwordMatch = async function(password) {
    const match = await bcrypt.compare(`${password}`, this.password);
    return match;
}

UserSchema.methods.generateJWT = function () {
    return jwt.sign(
      { user_id: this.id, email: this.email },
      process.env.TOKEN_SECRET,
      { expiresIn: parseInt(process.env.TOKEN_EXPIRATION, 10) }
    );
}

module.exports = mongoose.model('User', UserSchema);