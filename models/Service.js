const mongosse = require("mongoose");

const {Schema} = mongosse;


const serviceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {timestamps : true});

const Service = mongosse.module("Service", serviceSchema);

module.exports = {
    Service,
    serviceSchema
}