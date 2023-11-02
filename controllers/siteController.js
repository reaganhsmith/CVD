const utlities = require("../utilities")
const reviewMod = require("../models/reviews-model")


async function buildByReview(req, res, next){
    const reviews = await utlities.seeReviews()
    res.render("./index", {
        reviews,
      })
}


async function buildTeam(req, res, next){

    res.render("./team/index", {
      })
} 

async function buildPatient(req, res, next){

    res.render("./patient/index", {
      })
} 

module.exports = {
    buildByReview,
    buildTeam,
    buildPatient
}


