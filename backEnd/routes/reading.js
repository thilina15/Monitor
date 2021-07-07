const express = require('express')
const router = express.Router()



const {addReading} = require('../controllers/reading')

router.post('/',addReading)


module.exports = router
