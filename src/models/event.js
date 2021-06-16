const mongoose = require('mongoose');
const schema = mongoose.Schema;

const event = new schema({
    heading: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        require: true,
    },
    details: {
        type: String,
        required: true
    }
}, { timestamps: true })

const eventModel = mongoose.model('event', event);
module.exports = eventModel;