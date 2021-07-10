const user = require('../models/user')
const jwt = require('jsonwebtoken')


exports.registerUser = (req,res)=>{
    //user registration logic
    console.log(req.body)
    var userOB = new user({
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile,
        notificationChannel:req.body.notificationChannel,
        password:req.body.password
    })
    userOB.save()
    .then((ob=>{
        res.status(200).send(ob.id)
    }))
    .catch((e)=>{
        res.status(400).send(e)
    })
}

exports.loginUser = (req,res)=>{
    //user login logic
    user.findOne({email:req.body.email, password:req.body.password})
    .then((ob)=>{
        if(ob){
            const jwtToken = jwt.sign({userID:ob._id},'jwtKey')
            res.status(200).header('x-auth-token',jwtToken).json({jwt:jwtToken})
        }else{
            res.status(200).send('fail')
        }   
    })
    .catch(e=>{
        res.status(400).send('try again..')
    })
}

exports.allUsers = (req,res)=>{
    //retrieve users
    user.find()
    .then(users=>{
        res.status(200).send(users)
    })
    .catch(e=>{
        res.status(400).send('try again')
    })
}

exports.updateUser = (req,res)=>{
    console.log('in put')
    //update login
    user.findById(req.body.id)
    .then(ob=>{
        ob.name=req.body.name
        ob.email=req.body.email
        ob.mobile=req.body.mobile
        ob.notificationChannel=req.body.notificationChannel
        ob.password=req.body.password
        ob.save()
        .then(savedUser=>{
            res.status(200).send('used updated..')
            console.log('user updated');
        })
        .catch(e=>{
            res.status(400).send('cannot update the user')
            console.log('user error');
        })
    })
    .catch(e=>{
        res.status(400).send('cannot find user')
    })
}

exports.getUser = (req,res)=>{
    //get user details
    user.findById(req.params.userID)
    .then(ob=>{
        res.status(200).json(ob)
    })
    .catch(e=>{
        res.status(400).send('error')
    })
}