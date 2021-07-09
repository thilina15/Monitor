const sensor = require('../models/sensor')
const {sendAlert} = require('../services/alert')

exports.addReading=async(req,res)=>{
    
    try{
        var sensorOB = await sensor.findById(req.body.sensor_id)
        //compair reading value and threshold
        var feedback="normal"
        if((req.body.data_value)>(sensorOB.threshold)){
            feedback="alert"
            sendAlert(sensorOB)
            
        }
        sensorOB.readings.push({
            value:req.body.data_value,
            feedback:feedback,
            time:new Date(req.body.date)
        })
        await sensorOB.save()
        res.status(200).send('reading added')
    }catch(e){
        res.status(400).send('try again')
    }
}
