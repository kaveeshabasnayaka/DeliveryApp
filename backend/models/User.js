const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true,
        trim: true,
        lowercase: true
    },
    name: { 
        type: String, 
        required: true,
        trim: true
    },
    contactDetails: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    oldOrders: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Order' 
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);