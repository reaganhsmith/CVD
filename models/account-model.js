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

async function checkEmail(account_email){
    try{
        const sql = "SELECT * FROM public.account WHERE account_email = $1"
        const email = await pool.query(sql, [account_email])
        return email.rowCount
    }
    catch(error){
      return error.message
    }
}

async function getAccountByEmail(account_email){
    try{
        const result = await pool.query(
            'SELECT * FROM account WHERE account_email = $1',
            [account_email])
          return result.rows[0]
    }
    catch(error){
      return error.message
    }
}

module.exports = {
    addAccount,
    checkEmail,
    getAccountByEmail
}