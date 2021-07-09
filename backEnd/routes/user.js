const express = require('express')
const router = express.Router()

const{allUsers,updateUser,loginUser,registerUser} = require('../controllers/user')

router.post('/',registerUser)
router.post('/login',loginUser)
router.get('/all',allUsers)
router.put('/',updateUser)

module.exports = router