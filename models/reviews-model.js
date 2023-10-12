const pool = require("../database/")

async function getReviews(){
    return await pool.query("SELECT * FROM public.reviews")
}


module.exports = {
    getReviews
}