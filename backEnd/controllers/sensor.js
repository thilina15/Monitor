exports.registerSensor = (req,res) => {
    //register the sensor
    res.send(req.body)
}

exports.allSensors = (req,res) => {
    //get all the sensors for a user
    res.send('all sensors')
}

exports.deleteSensor = (req,res) => {
    //delete a sensor
    res.send('delete sensor')
}