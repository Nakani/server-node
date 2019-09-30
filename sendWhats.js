const accountSid = 'ACaa3511e4afa060d2674881d92c177697';
const authToken = '1e6dc24e9b8a3555e7012817d5337cb1';
const client = require('twilio')(accountSid, authToken);

client.messages.create({
    from: 'whatsapp:+14155238886', // From a valid Twilio number
    to: 'whatsapp:+5551992256789',  // Text this number
    body: 'olá Gornatti! entrega na recepção!',
})
    .then((message) => console.log(message)).catch((error) => console.log(error));
