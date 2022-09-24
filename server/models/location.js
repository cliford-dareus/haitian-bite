const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    title: {
        type: 'String',
        trim: true,
        required: true,
        maxlength: [30, `Name must be 30 character or less`]
    },
    description: {
        type: 'String',
        trim: true,
        required: true,
        maxlength: [60, `Name must be 60 character or less`]
    },
    image: { type: 'String',trim: true },
    phone: {
        type: 'Number',
        trim: true,
        required: true,
        maxlength: [20, `Name must be 20 character or less`]
    },
    adress: { type: 'String', required: true },
    review: {
        type: 'String',
        trim: true,
        maxlength: [40, `Name must be 20 character or less`]
    },
    rating: {
        type: 'Number',
        default: 0,
        max: 10,
        min: 0
    },
    latitude: {
        type: 'Number',
        required: true,
        min: -90,
        max: 90,
    },
    longitude: {
        type: 'Number',
        required: true,
        min: -180,
        max: 180,
  },
});


module.exports = mongoose.model('Location', locationSchema);