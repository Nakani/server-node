const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload')
const routes = express.Router()
const upload = multer(uploadConfig)

//controllers
const SessionController = require('./controllers/SessionController')
const HubController = require('./controllers/HubController')
const CollaboratorController = require('./controllers/CollaboratorController')
const WhatsappController = require('./controllers/WhatsappController')

//controllers from Uhuu
const EventController = require('./controllers/EventController')


//GET, POST, PUT, DELETE
//req.query =  acessar query params (para filtros)
//req.params = Acessar route params (para edicao(put), delete)
//req.body = Acessar corpo da requisição( para criação, edição)

//GET
routes.get('/hubs', HubController.index);

//POST
routes.post('/sessions', SessionController.store);
routes.post('/hubs', upload.single('background'), HubController.store);
routes.post('/collaborator-store', CollaboratorController.store);
routes.post('/notify-whats', WhatsappController.notifyByWhats)

//Uhuu
routes.post('/events', EventController.index);
module.exports = routes