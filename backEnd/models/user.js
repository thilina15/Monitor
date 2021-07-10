const mongoose = require('mongoose')
const User = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    mobile:String,
    notificationChannel:String,
    userName:String,
    password:String
})

module.exports = mongoose.model('user',User)