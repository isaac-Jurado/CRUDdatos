const Dato = require("../models/Dato")


const readDatos = async(_,res)=>{
    try {
        //? creamos una constante dato que esperara a ver sin 
        //? por medio de lo que traiga el objeto Dato que es 
        //? nuestra estructura de DB
        const datos = await Dato.find({})
        //? si datos esta vacio renderisamos el index
        if(datos.length===0){
            return res.render("index",{ok:false})
        }
        //? si no mostraremos los datos que tenga datos
        return res.render("index", {ok:true, datos: datos})
    } catch (error) {
        console.log(error)
        return res.json({ok: false, msg: "Error en el servidor, contacta al admin"})
    }
}

const createDato = async (req,res) =>{
    try {
        //? creamos la constante donde se almacenara la infomacion trida del body
        const dato_nuevo = new Dato(req.body)
        //? .save guarda los cambios 
        await dato_nuevo.save()
        
        //? una vez terminado eso nos redirige a la ruta raiza
        return res.redirect("/")

    } catch (error) {
        //? nos muestra en consola cual es el erro
        console.log(error)
        //? nos regresa un mensaje en caso de existir un error 
        return res.json({ok:false,msj:"error contacta al servidor"})
    }
}

const deleteDato = async(req,res)=>{
    //? crear una constante id que pide
    //? el parametro id que es un id unico
    const id = req.params.id
    try {
        //? espera ha encontrar por un id para borrar
        await Dato.findByIdAndDelete(id)
        //? una vez eso nos redirige a la ruta raiz
        return res.redirect("/")
    } catch (error) {
        console.log(error)
        return res.json({ok: false, msg: "Error en el servidor, contacta al admin"})
    }
}
const updateDato = async(req,res)=>{
    const id =req.body.edit_id
    try {
        await Dato.findByIdAndUpdate(id, req.body)
        return res.redirect("/")

    } catch (error) {
        console.log(error)
        return res.json({ok: false, msg: "Error en el servidor, contacta al admin"})
    }
}
module.exports= {
    readDatos,
    createDato,
    deleteDato,
    updateDato
}