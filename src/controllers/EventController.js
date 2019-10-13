const accountSid = 'ACaa3511e4afa060d2674881d92c177697'; //account twilio
const authToken = '1e6dc24e9b8a3555e7012817d5337cb1'; //authtoken twilio
const client = require('twilio')(accountSid, authToken);

function getEventByCity(queryText){
    
    return "Aguardando Configuração webhook :)"
}

module.exports = {
    async index(req, res) {
        const { intent, queryText } = req.body.queryResult;
       // const hub = await Hub.find({ nameHub: nameHub });

      let fulfillmentText=''
       switch (intent.displayName) {
           case "cidades":
            fulfillmentText = getEventByCity(queryText)
               break;

       
       }

  return res.json({
    fulfillmentText: fulfillmentText
  });


    },
}