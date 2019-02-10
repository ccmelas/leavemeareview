const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

module.exports = mongoose.model('User', UserSchema);