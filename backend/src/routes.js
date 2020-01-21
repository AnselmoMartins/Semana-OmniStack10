const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const Dev = require('./models/Dev');

const routes = Router();

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);
routes.get('/search', SearchController.index)
routes.put('/updatedev', DevController.updateDev)
routes.delete('/:id/devs', DevController.delete)
module.exports = routes;