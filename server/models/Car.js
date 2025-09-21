const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    basePrice: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    options: {
        battery: [{
            type: String,
            price: Number
        }],
        color: [{
            name: String,
            price: Number,
            imageUrl: String
        }],
        wheels: [{
            name: String,
            price: Number
        }],
        interior: [{
            name: String,
            price: Number
        }]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Car', CarSchema);
 