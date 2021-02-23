const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

//Inicio de Middleware

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false})) //parsea las requests con urlencoded payloads, está basado en body-parser
app.use(express.json())
app.use(cors())

//Setear las rutas

app.use(require('./routes/index.js'))

//Inicio el servidor

app.listen( 3001, () => {
    console.log('Server listening at 3001')
})