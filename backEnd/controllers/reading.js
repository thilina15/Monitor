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
        if(req.body.date){
            sensorOB.readings.push({
                value:req.body.data_value,
                feedback:feedback,
                time:new Date(req.body.date)
            })
        }else{
            sensorOB.readings.push({
                value:req.body.data_value,
                feedback:feedback,
                time:new Date()//.toLocaleString('en-US', { timeZone: 'Asia/India' })
            })
        }
        
        await sensorOB.save()
        res.status(200).send('reading added')
    }catch(e){
        res.status(400).send('try again')
    }
}



exports.getReadings=async(req,res)=>{
    const sensorOB = await sensor.findById(req.params.sensorID)
    const readings = sensorOB.readings
    res.status(200).json({
        values:readings
    })
}

exports.getAlerts = async(req,res)=>{
    const sensorOB = await sensor.findById(req.params.sensorID)
    const alerts =[] 
    sensorOB.readings.forEach(reading=>{
        if(reading.feedback=='alert'){
            alerts.push(reading)
        }
    })
    const alertsReversed = alerts.reverse()
    res.status(200).json({alerts:alertsReversed})
}
