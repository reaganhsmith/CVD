const accountMod = require('../models/account-model')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()


async function registerAccount(req, res, next){

  const {firstName, lastName, account_email, account_phone, account_password, dob} = req.body

  let hashedPassword
  try {
    hashedPassword = await bcrypt.hashSync(account_password, 10)
  } catch (error) {
    req.flash("notice", 'Sorry, there was an error processing the registration.')
    res.status(500).render("./account/register", {
      errors: null,
    })
  }

  const newUser = await accountMod.addAccount(
    firstName,
    lastName,
    account_email,
    account_phone,
    hashedPassword,
    dob
  )

  if(newUser){
    req.flash("notice", "Account created! Please login")
    res.render("./account/login", {
        errors: null

    })
  } else{
    req.flash("notice", "sorry unable to create account")
    res.status(501).render("./account/register", {
      errors: null 
    })
  }

  
} 

async function createRegistration(req, res, next){

  res.render("./account/register", {
    errors: null
    })
} 

async function createLogin(req, res, next){

  res.render("./account/login", {
    errors: null
    })


    
} 


async function accountLogin(req, res, next) {
  const {account_email, account_password} = req.body

  const checkEmail = await accountMod.getAccountByEmail(account_email)

  if(checkEmail){
    req.flash("notice", "Logged in")
    res.render("./account/account", {
        errors: null,
        firstName: checkEmail.firstname

    })
  } else{
    req.flash("notice", "sorry unable to login, please try again.")
    res.status(501).render("./account/login", {
      errors: null 
    })
  }
  try {
    if (await bcrypt.compare(account_password, checkEmail.account_password)) {
    delete accountData.account_password
    const accessToken = jwt.sign(accountData, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 3600 * 1000 })
    res.cookie("jwt", accessToken, { httpOnly: true, maxAge: 3600 * 1000 })
    return res.redirect("/account/")
    }
   } catch (error) {
    return new Error('Access Forbidden')
   }
 }

  module.exports = {
    createLogin,
    createRegistration,
    registerAccount,
    accountLogin
}
