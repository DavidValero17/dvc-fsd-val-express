const mongoose = require('mongoose');

const db = () => {
    mongoose.connect(
        process.env.MONGO_URI
    ).then(()=>{
        console.log("conexion stablished");
    }).catch((error) => {console.log(error.message)})
}

module.exports =db;