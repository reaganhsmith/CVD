const utlities = require("../utilities")

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


async function buildService(req, res, next){

  res.render("./service/index", {
    })
} 

async function buildSchedule(req, res, next){

  res.render("./schedule/index", {
    })
} 


module.exports = {
    buildByReview,
    buildTeam,
    buildService,
    buildSchedule
}


