const { Schema, model } = require('mongoose');

const ReviewSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: 'Review needs an owner 😇'
    },
    rating: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    tags: [String],
    reviewer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    projectUrl: String,
    position: String,
    company: String
});

module.exports = model('Review', ReviewSchema);