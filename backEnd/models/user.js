const mongoose = require('mongoose')
const user = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:String,
    mobile:String,
    notificationChannel:String,
    userName:String,
    password:String
})

module.exports = mongoose.model('user',User)