import mongoose from 'mongoose'

export const db = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI)
        const dbUrl = db.connection.host + ':' + db.connection.port
        console.log('Successfully connected to database',dbUrl)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}