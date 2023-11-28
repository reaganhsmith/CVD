const utlities = require(".")
const {body, validationResult} = require("express-validator")
const validate = {}
const accountMod = require('../models/account-model')


// VALIDATING THE REGISTRATION 
validate.registrationRules = () => {
    return [
        body("firstName")
        .trim()
        .isLength({min: 1})
        .withMessage("please provide a first name"),

        body("lastName")
        .trim()
        .isLength({min: 2})
        .withMessage("please provide a last name"),

        body("account_email")
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage("please provide a valid email")
        .custom(async (account_email) =>{
            const emailExists = await accountMod.checkEmail(account_email)
            if(emailExists){
                throw new Error('Email exists. Please login') 
            }
        }),

        body("account_phone")
        .trim()
        .isLength({min: 10})
        .withMessage("Please provide a phone number in ### ### #### format"),

        body("dob")
        .trim()
        .isLength({min: 10})
        .withMessage("Please provide a date of birth in YYYY-MM-DD format"),

        body("account_password")
        .trim()
        .isStrongPassword({
            minLength: 6,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 0
        })
        .withMessage("Password does not meet requirements")
    ]
}


validate.checkRegistrationData = async (req, res, next) => {
    const {firstName, lastName, account_email, account_phone, dob} = req.body
    let errors = []
    errors = validationResult(req)
    if(!errors.isEmpty()){
        res.render("./account/register", {
            errors,
            firstName,
            lastName,
            account_email,
            account_phone,
            dob
        })
        return
    }
    next()
}

validate.checkLogin = () => {
    return [
        body("account_email")
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage("please provide a valid email")
        .custom(async (account_email) =>{
            const emailExists = await accountMod.checkEmail(account_email)
            if (!emailExists){
            throw new Error("Email does not exist. Please try again or create an account")
            }
        }),
        body("account_password")
        .trim()
        .isStrongPassword({
            minLength: 6,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 0
        })
        .withMessage("Password does not meet requirements")
    ]
}

validate.checkLoginAccount = async (req, res, next) => {
    const {account_email } = req.body
    let errors = []
    errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.render("account/login", {
        errors,
        account_email,
      })
      return
    }
    next()
  }

module.exports = validate
