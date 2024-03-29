const accountSid = '###AccountSid###';
const authToken = '###AuthToken###';
const client = require('twilio')(accountSid, authToken);
const Collaborator = require('../models/Collaborator')

module.exports = {
    async notifyByWhats(req, res) {
        const { collaboratorName, message } = req.body
        let collaborator = await Collaborator.find(({ name: { $regex: new RegExp(collaboratorName) } }));
        if (collaborator.length <= 1) {
            collaborator.map(data => {
                client.messages.create({
                    from: 'whatsapp:+14155238886', // From a valid Twilio number
                    to: 'whatsapp:+55' + data.phone,  // Text this number
                    body: message,
                })
                    .then((result) => {
                        return res.json({
                            result: true,
                            type: 'success',
                            message: result
                        });
                    }).catch((error) => {
                        console.log('erro =>', error)
                        return res.json({
                            result: false,
                            type: 'error',
                            message: error
                        });
                    })
            })
        } else {
            let collaboratorfinds = []
            collaborator.map(data => {
                collaboratorfinds.push(data.name)
            })
            return res.json({
                result: true,
                type: 'doubt',
                message: collaboratorfinds
            })
        }
    },
}