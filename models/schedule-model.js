const pool = require("../database/")

async function scheduleAppt(currentPatient, firstName, lastName, email, phone, datePicked, timePicked, reason){
    try{
        const sql = "INSERT INTO public.schedule (currentPatient, firstName, lastName, email, phone, datePicked, timePicked, reason) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *"
        return await pool.query(sql, [
            currentPatient, firstName, lastName, email, phone, datePicked, timePicked, reason
        ])
    }
    catch(error){
      return error.message
    }
}



module.exports = {
    scheduleAppt
}