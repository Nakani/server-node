//index, show, store, update, destroy
const Hub = require('../models/Hub')

module.exports = {
    async index(req, res) {
        const { nameHub } = req.query;
        const hub = await Hub.find({ nameHub: nameHub });
        return res.json(hub);
    },

    async store(req, res) {
        const { filename } = req.file;
        const {
            thumbnail,
            nameHub,
            phoneResponsible,
            videosId,
            countVisits
        } = req.body

        let hub = await Hub.findOne({ nameHub });
        if (!hub) {
            hub = await Hub.create({
                thumbnail: thumbnail,
                nameHub: nameHub,
                phoneResponsible: phoneResponsible,
                videosId: videosId.split(',').map(id => id.trim()),
                countVisits: countVisits
            })
        }
        return res.json(hub)
    }
}