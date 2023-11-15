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
        

    })
  } else{
    req.flash("notice", "sorry unable to create account")
    res.status(501).render.render("./account/register", {
        
    })
  }
} 

async function createRegistration(req, res, next){

  res.render("./account/register", {

    })
} 

async function createLogin(req, res, next){

  res.render("./account/login", {

    })
} 

  module.exports = {
    createLogin,
    createRegistration,
    registerAccount
}
