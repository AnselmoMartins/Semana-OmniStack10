const axios = require('axios');
const mongoose = require('mongoose');
const inst = axios.create({
    proxy: {
      host: '192.168.0.254',
      port: '3127',
    }
});
const Dev = require('../models/Dev');

module.exports = {
   async index(request, response){
        const devs = await Dev.find();
        return response.json(devs);
   },

   async store(request, response){
       const { github_username, techs, latitude, longitude} = request.body;
       let dev = await Dev.findOne ({ github_username});
       if(!dev){
           const apiResponse = await inst.get(`https://api.github.com/users/${github_username}`);
           
           const { name = login, avatar_url, bio } = apiResponse.data;
           
           const techsArray = ParseStringAsArray.stringToArray(techs);

           const location = {
               type: 'Point',
               coordinates: [longitude, latitude],
           };
           
           dev = await Dev.create({
               github_username,
               name,
               avatar_url,
               bio,
               techs: techsArray,
               location,
           })
       }
       return response.json(dev);
   },

   async delete(request, response){
       console.log(request.params);
       const dev = await Dev.findByIdAndDelete({_id: new mongoose.mongo.ObjectID(request.params.id)});
       response.json(dev);
   }
    
}