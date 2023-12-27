import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
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
