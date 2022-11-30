//! importamos la dependencia mongoose
const mongoose = require ("mongoose");

//! con esta funcion "asincrona"-> si se tiene que esperar
//! es una funcion asincrona
const dbconexion = async () => {
    try {
        //? si no hay error mongoose se conectara mediente el
        //? la dirección que se dio en el archivo .env
        await mongoose.connect(process.env.MONGOURI)
        //? depues de conectar mandara un mensaje en consola
        console.log("base de datos conectada")
    } catch (error) {
        //? en caso de existir un error mandara por consola 
        //? el error
        console.log(error)
        throw new Error("error al conectar ala bd")
        
    }
}
//! exportaremos este modulo 
module.exports = dbconexion;