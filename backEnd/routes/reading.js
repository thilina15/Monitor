const express = require('express')
const router = express.Router()



const {addReading,getReadings,getAlerts} = require('../controllers/reading')

router.post('/',addReading)
router.get('/:sensorID',getReadings)
router.get('/alerts/:sensorID',getAlerts)

module.exports = router
