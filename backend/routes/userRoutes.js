const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get user by username
router.get('/:username', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new user
router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update user
router.put('/:username', async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { username: req.params.username }, 
            req.body, 
            { new: true, runValidators: true }
        );
        
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete user
router.delete('/:username', async (req, res) => {
    try {
        const deletedUser = await User.findOneAndDelete({ username: req.params.username });
        
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;