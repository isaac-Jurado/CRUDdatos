//! utilizando el metodo config
require("dotenv").config()

const { application } = require("express")
//!importamos el modulo de la conexion 
const dbconexion = require("./database/config")
//!requerimos usar express
const express = require("express")


//? instanciamos express y asi poder utilizar
//? todos lo metodos que ofrece
const app = express()

//!traemos la importacion de la conexion a la DB 
dbconexion()
//? especificamos el motor de plantilla que se utiliza
app.set("view engine", "pug")
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/static", express.static ("./public"))

app.use(require("./routes/datos.js"))
//?express estara escuchando al servidor
//? porocess.env regresa un objeto del archivo
//? .env usando la variable PORT
app.listen(process.env.PORT,()=>{
    //? utilizando comillas invertidas podremos concatener la variable
    console.log(`app escuchando en http://localhost:${process.env.PORT}`)
})