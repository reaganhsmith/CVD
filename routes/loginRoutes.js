const express = require("express")
const router = express.Router() 
const utilities = require('../utilities')

const loginController = require("../controllers/loginController")

router.get("/", utilities.handleErrors(loginController.createLogin))
router.get("/login", utilities.handleErrors(loginController.createLogin))

module.exports = router;