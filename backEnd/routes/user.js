const express = require('express')
const router = express.Router()

const{allUsers,updateUsers,loginUsers,registerUsers} = require('../controllers/user')

router.post('/',registerUser)
router.post('/login',loginUser)
router.get('/all',allUsers)
router.put('/',updateUser)

module.exports = router