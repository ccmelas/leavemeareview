const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: 'Please provide a name',
        trim: true
    },
    email: {
        type: String,
        required: 'Please provide an email',
        unique: true,
        trim: true
    },
    password: String,
    avatar: String
});

UserSchema.pre('save', async function(next) {
    const user = this;

    if (!user.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 10);
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