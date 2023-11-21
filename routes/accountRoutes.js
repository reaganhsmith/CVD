const express = require("express")
const router = express.Router() 
const utilities = require('../utilities')
const accountVal = require('../utilities/account-validation')

const accountController = require("../controllers/accountController")

router.get("/", utilities.handleErrors(accountController.createLogin))

router.get("/login", utilities.handleErrors(accountController.createLogin))

router.get("/register", utilities.handleErrors(accountController.createRegistration))

router.post("/register", 
accountVal.registrationRules(),
accountVal.checkRegistrationData,
utilities.handleErrors(accountController.registerAccount))

module.exports = router;