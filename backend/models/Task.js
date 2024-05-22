const mongoose = require("mongoose")

const {Schema} = mongoose;

const taskSchema = new Schema({
    task:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("tasks",taskSchema )

