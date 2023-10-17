const pool = require("../database/")

async function getReviews(){
    return await pool.query("SELECT * FROM public.reviews WHERE review_id BETWEEN 4 AND 15;")
}


module.exports = {
    getReviews
}