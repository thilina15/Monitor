const sensor = require('../models/sensor')

exports.addReading=async(req,res)=>{
    
    try{
        sensorOB = await sensor.findById(req.body.sensor_id)
        //compair reading value and threshold
        var feedback="normal"
        if((req.body.data_value)>(sensorOB.threshold)){
            feedback="alert"
            
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
