import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    todo:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Todo", todoSchema);