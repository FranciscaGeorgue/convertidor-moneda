import jwt from 'jsonwebtoken';

const generateJWT = (id) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
    return token
}

export {
    generateJWT
}