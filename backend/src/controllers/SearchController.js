const Dev = require('../models/Dev');
const ParseStringAsArray = require('../utils/parseStringAsArray');
module.exports = {
    async index(request, response){
        // buscar todos os devs num raio de 10 km
        //filtrar por tecnologia
        const { latitude, longitude, techs} = request.query;
        
        const techsArray = ParseStringAsArray.stringToArray(techs);
        
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type:'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                }
            }
        });

        return response.json({devs});
    }
}