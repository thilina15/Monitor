const {emailAlert}= require('../services/emailAlert')
const {callAlert} = require('../services/callAlert')
const {smsAlert} = require('../services/smsAlert')
const user = require('../models/user')




exports.sendAlert=async(sensorOB)=>{
    const userOB = await user.findById(sensorOB.user)
    const notificationChannel=userOB.notificationChannel
    
    switch (notificationChannel) {
        case 'email':
            emailAlert(userOB.email)
            break;
        case 'call':
            callAlert()
            break;
        case 'sms':
            smsAlert()
            break;
        default:
            break;
    }
}
