const mongoose = require('mongoose');

const HubSchema = new mongoose.Schema({
    thumbnail: String,
    background: String,
    nameHub: String,
    phoneResponsible: Number,
    videosId: [String],
    countVisits: String
})

module.exports = mongoose.model('Hub', HubSchema);