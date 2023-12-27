import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import { db } from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'

// Variables de entorno
dotenv.config()

// Configurar la app
const app = express()

// Middleware para parsear el cuerpo de la solicitud como JSON
app.use(bodyParser.json());

// Conectar a la BD
db()

// Configurar cors
// const whiteList = [process.env.FRONTEND_URL] // PROD
const whiteList = [process.env.FRONTEND_URL, undefined] // Permite pruebas por postman

const corsOptions = {
    origin: function (origin, callback) {
        if (whiteList.includes(origin)) {
            // Permite la conexion
            callback(null, true)
        } else {
            // No permite la conexion
            callback(new Error('Error de CORS'))
        }
    }
}

app.use(cors(corsOptions))

// Definir ruta
// app.get('/', (req,res) =>{
//     res.send('Hola')
// })

app.use('/api/services', userRoutes) // cualquier peticion HTTP se busca en userRoutes
app.use('/api/auth', authRoutes) // cualquier peticion HTTP se busca en userRoutes

// Definir puerto
const PORT = 4000 || process.env.PORT

// Arrancar app
app.listen(PORT, () => {
    console.log('Server is listening on port', PORT)
})
