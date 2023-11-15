const pool = require("../database/")

async function addAccount(firstName, lastName, account_email, account_phone, account_password, dob){
    try{
        const sql = "INSERT INTO public.account (firstName, lastName, account_email, account_phone, account_password, dob) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *"
        return await pool.query(sql, [
            firstName, lastName, account_email, account_phone, account_password, dob
        ])
    }
    catch(error){
      return error.message
    }
}



module.exports = {
    addAccount
}