const sensor = require('../models/sensor')

exports.registerSensor = async(req,res) => {
    //register the sensor
    var sensorOB = new sensor({
        user:req.body.userID,
        threshold:req.body.threshold
    })
    try{
        const ob = await sensorOB.save()
        res.status(200).json({sensorID:ob.id})
    }catch(e){
        res.status(400).send('Sensor creation failure')
    }
}

exports.allSensors = async(req,res) => {
    //get all the sensors for a user
    try{
        const sensors = await sensor.find({user:req.params.userID})
        res.status(200).json({sensors:sensors})
    }catch(e){
        res.status(400).send('Sensors not found')
    }
}

exports.deleteSensor = async(req,res) => {
    //delete a sensor
    try{
        const ob = await sensor.findByIdAndRemove(req.params.sensorID)
        res.status(200).send(ob)
    }catch(e){
        res.status(400).send('Sensor deletion failure')
    }
}