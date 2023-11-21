const utlities = require(".")
const {body, validationResult} = require("express-validator")
const validate = {}


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
        .withMessage("please provide a valid email"),

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

// THIS WILL CHECK OUR VALIDATION ADN RETURN A MESSAGE IF NOT CORRECT
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

module.exports = validate
