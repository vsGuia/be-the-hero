const express = require('express');

const OngController = require('./controller/OngController');
const IncidentsController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();


routes.post('/sessions', SessionController.create);


//Cadastrar e listar as ONGS
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Cadastrar e listar os casos 
routes.get('/incidents', IncidentsController.index)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id', IncidentsController.delete)

//Listando um caso específico
routes.get('/profile', ProfileController.index)


module.exports = routes;