const mongoose = require ("mongoose");

async function main(){
    try {

        mongoose.set("strictQuery", true);
        await mongoose.connect("mongodb+srv://vinicius:H4na6HsU78S5HK0L@cluster0.x42rlry.mongodb.net/?retryWrites=true&w=majority");
        console.log("conectado ao banco")
    } catch (error) {
        console.log(error)
    }
}

module.exports = main;