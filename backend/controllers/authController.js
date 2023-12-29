import User from '../models/User.js'
import { generateJWT } from '../utils/index.js';

// Registro de usuarios
const register = async (req,res) => {

    // Validar todos los campos
    if (Object.values(req.body).includes('')) {
        const error = new Error('Todos los campos son obligatorios.')
        return res.status(400).json({ msg: error.message })
    }

    // Evitar duplicados
    const { name } = req.body
    const userExists = await User.findOne({ name: name })
    if(userExists){
        const error = new Error('El nombre de usuario ya se encuentra registrado.')
        return res.status(400).json({ msg: error.message })
    }

    // Se crea el usuario
    try {
        const user = new User(req.body)
        await user.save()

        res.json({
            msg: 'El usuario se creo correctamente.'
        })
    } catch (error) {
        const errorAux = new Error(error)
        return res.status(400).json({ msg: error.message })
    }
}

// Login de usuarios
const login = async (req,res) => {

    const { name, password } = req.body

    // Revisar que el usuario exista
    const user = await User.findOne({ name: name })
    if(!user){
        const error = new Error('El usuario no existe.')
        return res.status(400).json({ msg: error.message })
    }

    // Comprobar el password
    if (await user.checkPassword(password)) {
        const token = generateJWT(user._id)
        res.json({ msg: 'Usuario autenticado.' , token })
    } else {
        const error = new Error('El password es incorrecto.')
        return res.status(400).json({ msg: error.message })
    }
}

const user = async (req,res) => {
    const { user } = req
    res.json(user)
}

export {
    register,
    login,
    user
}