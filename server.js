var express = require('express');
var app = express();
const cors = require('cors');
var morgan = require('morgan')
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());

app.post('/sendwhats', (req, res) => {
  console.log('init', req.body)
  // res.sendFile(__dirname + 'sendWhats.js')
  resolveMessage(req.body)
})

io.on('connection', (socket) => {
  console.log('new connection', socket.id)
})

http.listen(8080, function () {
  console.log('listening on port ' + port)
})
const accountSid = 'ACaa3511e4afa060d2674881d92c177697';
const authToken = '1e6dc24e9b8a3555e7012817d5337cb1';
const client = require('twilio')(accountSid, authToken);


function resolveMessage(data) {
  const messageTo = ''
  console.log('resolveMessage', data.name)
  switch (data.name) {
    case 'guedes':
      console.log(data)
      // messageTo = {
      //   name: 'guedes',
      //   number: '5192256789',
      //   //message: data.message
      // }
      //sendWhats(messageTo)
      break;
  }
  console.log(messageTo)
  sendWhats()
}

function sendWhats(messageTo) {
  // console.log(messageTo)
  client.messages.create({
    from: 'whatsapp:+14155238886', // From a valid Twilio number
    to: 'whatsapp:+555192256789',  // Text this number
    body: 'olá Guedes! tem alguém o aguardando na recepção!',
  })
    .then((message) => {
      return false

      //console.log(message))
    })
    .catch((error) => console.log(error));

}



