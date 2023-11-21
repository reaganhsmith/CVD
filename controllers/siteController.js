const utlities = require("../utilities")

async function buildByReview(req, res, next){
    const reviews = await utlities.seeReviews()
    res.render("./index", {
        reviews,
        errors: null
      })
}


async function buildTeam(req, res, next){

    res.render("./team/index", {
      errors: null
      })
} 


async function buildService(req, res, next){

  res.render("./service/index", {
    errors: null
    })
} 

async function buildSchedule(req, res, next){

  res.render("./schedule/index", {
    errors: null
    })
} 


module.exports = {
    buildByReview,
    buildTeam,
    buildService,
    buildSchedule
}


