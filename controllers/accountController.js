const accountMod = require('../models/account-model')


async function registerAccount(req, res, next){

  const {firstName, lastName, account_email, account_phone, account_password, dob} = req.body

  const newUser = await accountMod.addAccount(
    firstName,
    lastName,
    account_email,
    account_phone,
    account_password,
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
  const {account_email} = req.body

  const checkEmail = await accountMod.getAccountByEmail(account_email)

  if(checkEmail){
    req.flash("notice", "Logged in")
    res.render("./account/account", {
        errors: null,
        firstName: checkEmail.firstname

    })
  } else{
    req.flash("notice", "sorry unable to login, please try again")
    res.status(501).render("./account/login", {
      errors: null 
    })
  }
 }

  module.exports = {
    createLogin,
    createRegistration,
    registerAccount,
    accountLogin
}
