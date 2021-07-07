const mongoose = require('mongoose')

const Sensor = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'User'
    },
    threshold:{
        type:Number,
        required:true
    },
    readings:[{
        value:Number,
        feedback:String,
        time:Date
    }]
})

module.exports = mongoose.model('sensor', Sensor)