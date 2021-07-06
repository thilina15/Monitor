const express = require('express')
const router = express.Router()

const {registerSensor, allSensors, deleteSensor} = require('../controllers/sensor')

router.post('/', registerSensor)
router.get('/all', allSensors)
router.delete('/', deleteSensor)

module.exports = router