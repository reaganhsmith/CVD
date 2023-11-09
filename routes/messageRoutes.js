const express = require("express")
const router = express.Router() 
const utilities = require('../utilities')

const messageController = require("../controllers/messageController")

router.get("/", messageController.buildSchedule)

// Export both routers
module.exports = router;