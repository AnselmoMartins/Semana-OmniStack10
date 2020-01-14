const { Router } = require('express');
const axios = require('axios');
const inst = axios.create({
    proxy: {
      host: '192.168.0.254',
      port: '3127',
    }
});

const Dev require()


const routes = Router();

routes.post('/devs', async (request, response) => {
   const { github_username, techs} = request.body
   
   const apiResponse = await inst.get(`https://api.github.com/users/${github_username}`)
   
   const {name = login, avatar_url, bio} = apiResponse.data;


   const techsArray = techs.split(',').map((tech) => {
       return tech.trim();
   })
   
   console.log(techsArray);

   return response.json({"Alo":"ouvindo"});
});

module.exports = routes;