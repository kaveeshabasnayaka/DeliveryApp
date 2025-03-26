const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true,
        trim: true
    },
    quantity: { 
        type: Number, 
        required: true, 
        min: [1, 'Quantity must be at least 1']
    },
    payment: { 
        type: Number, 
        required: true, 
        min: [0, 'Payment cannot be negative']
    },
    balance: { 
        type: Number, 
        default: 0 
    },
    delivered: { 
        type: Boolean, 
        default: false 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Order', OrderSchema);