const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, unique: true},
    password: String    
});

module.exports = AuthModel = mongoose.model('signup', authSchema);