const Collaborator = require('../models/Collaborator')
const Hub = require('../models/Hub')

module.exports = {
    async store(req, res) {
        const { name, email, phone, password, hub } = req.body
        const getHub = await Hub.findOne({ nameHub: hub });
        let collaborator = await Collaborator.findOne({ email });
        if (!collaborator) {
            const data = {
                name: name,
                email: email,
                phone: phone,
                password: password,
                hubID: getHub._id.toString(),
                active: true
            }

            collaborator = await Collaborator.create(data);
        }
        return res.json(collaborator)
    }
}