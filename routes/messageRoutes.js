const express = require("express")
const router = express.Router() 
const utilities = require('../utilities')

const messageController = require("../controllers/messageController")

router.get("/", utilities.handleErrors(messageController.buildSchedule))

router.post("/sent", utilities.handleErrors(messageController.createAppointment))
// Export both routers
module.exports = router;