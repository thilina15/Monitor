const express = require('express')
const app = express()
const mongoose = require('mongoose')
const sensorRoute = require('./routes/sensor')

app.use(express.json())
app.use('/sensor', sensorRoute)
app.use('/user')



//databse connection
mongoose.connect('mongodb://localhost:27017/Monitor',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false, 
    useCreateIndex: true}) 
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', ()=> console.log('connected to mongoose'))


app.listen(3000,()=>{
    console.log('server is running port 3000');
})
