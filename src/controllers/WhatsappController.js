const accountSid = 'ACaa3511e4afa060d2674881d92c177697';
const authToken = '1e6dc24e9b8a3555e7012817d5337cb1';
const client = require('twilio')(accountSid, authToken);
const Collaborator = require('../models/Collaborator')

module.exports = {    
   async notifyByWhats(req, res){
        const {collaboratorName, message}=req.body
        const collaborator = await Collaborator.findOne({name:collaboratorName})
            if(collaborator){
                const {name, phone, number} = collaborator
                client.messages.create({
                    from: 'whatsapp:+14155238886', // From a valid Twilio number
                    to: 'whatsapp:+55' + phone,  // Text this number
                    body: 'olá ' + name.toUpperCase() +' '+ message,
                })
                .then((result) => {
                    return res.json({
                        result:true,
                        message:result
                    });
                }).catch((error) => {
                    console.log('erro =>',error)
                     return res.json({
                         result:false,
                         errorMessage: error
                        });
                })
            }
    },
}