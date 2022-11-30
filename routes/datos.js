const {Router} = require("express")
//? variables que se ocuparan traidas de la carpeta
//? controllers y el archivo datos 
const { readDatos, createDato, deleteDato, updateDato } = require("../controllers/datos")

const router = Router()
//? la ruta raiz o bien la pagina primordial
//? ocupando el metodo get (obtener) 
router.get("/", readDatos)
//! una vez terminada la lectura 
//? metodo post nos envia la info a DB
//? sera la ruta que visitara utilizando la funcion de 
//? create contacto
router.post("/create", createDato)
//! una vez terminada la creacion 
//? metodo para elimiar mediante la obtencion de id 
router.get("/delete/:id", deleteDato)
//! una vez terminada eliminar
router.post("/update", updateDato)

module.exports = router