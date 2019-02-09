const mongoose = require('mongoose');

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

module.exports = mongoose.model('User', UserSchema);