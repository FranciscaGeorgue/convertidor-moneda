import mongoose from "mongoose";

const recordSchema = mongoose.Schema({
    activityDate: {
        type: String,
        require: true
    },
    user: {
        type: String,
        require: true,
        trim: true
    },
    amount: {
        type: Number,
        require: true
    },
    convertionDate: {
        type: String,
        require: true
    },
    coinValue: {
        type: Number,
        require: true
    },
    finalAmount: {
        type: Number,
        require: true
    },
})

const Record = mongoose.model('Record', recordSchema)
export default Record 