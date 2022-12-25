const { Service: ServiceModel } = require("../models/Service");

const serviceController = {
    create: async (req, res) => {
        try {

            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            }

        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = serviceController;