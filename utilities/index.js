const reviewsModel = require("../models/reviews-model")
const Util = {}
const jwt = require("jsonwebtoken")
require("dotenv").config()

Util.seeReviews = async function (req, res, next) {
    
    let data =await reviewsModel.getReviews()
    let reviewsSection = `<div class ="review">`
    data.rows.forEach((row) => {
        reviewsSection+= `<div class="indvReview">`    
        reviewsSection+= `<h3> ${row.reveiwer_name} </h3>`
        reviewsSection+= `<div class=rating>`
        reviewsSection+= `<img src="/images/stars.png" alt="5 stars" class="dStars">`
        reviewsSection+= `<p> ${row.rating} <p> </div>`
        reviewsSection+= `<p> ${row.review} </p>`
        reviewsSection+=` <img src="/images/googlereviews.webp" alt="google reviews logo"></div>` 
    });
    reviewsSection += '</div>'
    return reviewsSection

}

/* ****************************************
* Middleware to check token validity
**************************************** */
Util.checkJWTToken = (req, res, next) => {
    if (req.cookies.jwt) {
     jwt.verify(
      req.cookies.jwt,
      process.env.ACCESS_TOKEN_SECRET,
      function (err, accountData) {
       if (err) {
        req.flash("Please log in")
        res.clearCookie("jwt")
        return res.redirect("./account/login")
       }
       res.locals.accountData = accountData
       res.locals.loggedin = 1
       next()
      })
    } else {
     next()
    }
   }

   /* ****************************************
 *  Check Login
 * ************************************ */
 Util.checkLogin = (req, res, next) => {
    if (res.locals.loggedin) {
      next()
    } else {
      req.flash("notice", "Please log in.")
      return res.redirect("./account/login")
    }
   }


Util.handleErrors = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)

  module.exports = Util

