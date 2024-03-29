const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    password: String,
    hubID: String,
    active: Boolean
})

module.exports = mongoose.model('User', UserSchema);