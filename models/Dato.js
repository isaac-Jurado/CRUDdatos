const {Schema,model} = require("mongoose")

//? sera la estructua o los compos que 
//? contendra nuestra DB
const datoSchema = Schema({
    hardware: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    marca: {
        type:String,
        required:true
    },
    descripcion: {
        type:String,
        required:true
    },
    lanzamiento: {
        type:String,
        required:true
    },
    link: {
        type:String,
        required:true
    }
})

module.exports = model("Dato", datoSchema)