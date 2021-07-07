exports.registerUser = (req,res)=>{
    //user registration
    res.send(req.body);
}

exports.loginUser = (req,res)=>{
    //user login
    res.send(req.body);
}

exports.allUsers = (req,res)=>{
    //retrieve users
    res.send(req.body);
}

exports.updateUser = (req,res)=>{
    //update login
    res.send(req.body);
}