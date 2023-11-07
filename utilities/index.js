const reviewsModel = require("../models/reviews-model")


async function seeReviews(req, res, next){
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


module.exports = {
    seeReviews
}

