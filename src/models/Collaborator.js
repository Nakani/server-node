const mongoose = require('mongoose');

const CollaboratorSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    password: String,
    hubID: String,
    active: Boolean
})

module.exports = mongoose.model('Collaborator', CollaboratorSchema);