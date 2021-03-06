if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config({path:'./.env'})   
}
const nodeMailer = require('nodemailer')

//configure email
const transpoter = nodeMailer.createTransport({
    service:'gmail',
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASS_EMAIL
    }
})

exports.emailAlert=(email)=>{
    var mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "sessor fail alert",
        text:'one of your sensor got failed.. login to your account and check more about this failure..'
    }
    transpoter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log(err)
        }else{
            console.log('emailSent')
        }
    })
}
