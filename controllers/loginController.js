


async function createLogin(req, res, next){

    res.render("./account/login", {
      })
  } 



async function registerAccount(req, res, next){

  res.render("./account/register", {
    })
} 

  module.exports = {
    createLogin,
    registerAccount
}
