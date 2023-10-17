const pool = require("../database/")

async function getReviews(){
    return await pool.query("SELECT * FROM public.reviews WHERE review_id BETWEEN 1 AND 4;")
}


module.exports = {
    getReviews
}