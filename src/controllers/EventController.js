const accountSid = 'ACaa3511e4afa060d2674881d92c177697'; //account twilio
const authToken = '1e6dc24e9b8a3555e7012817d5337cb1'; //authtoken twilio
const client = require('twilio')(accountSid, authToken);

module.exports = {
    async index(req, res) {
        const { city } = req.body.queryResult.parameters;
       // const hub = await Hub.find({ nameHub: nameHub });

       let data=''
       switch (city) {
           case "Porto Alegre":
               data = city
               break;
               case "São Paulo":
                data = city
                break;
       
       }

  return res.json({
    fulfillmentText: "Deu certo Diogo"
  });


    },
}