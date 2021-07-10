const express = require('express')
const router = express.Router()



const {addReading,getReadings} = require('../controllers/reading')

router.post('/',addReading)
router.get('/:sensorID',getReadings)

module.exports = router
