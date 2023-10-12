const utlities = require("../utilities")
const reviewMod = require("../models/reviews-model")


async function buildByReview(req, res, next){
    const reviews = await utlities.seeReviews()
    res.render("./index", {
        reviews,
      })
}

module.exports = {
    buildByReview
}


