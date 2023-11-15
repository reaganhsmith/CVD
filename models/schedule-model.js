const pool = require("../database/")

async function scheduleAppt(currentPatient, firstName, lastName, email, phone, datePicked, timePicked, reason, timeRequested){
    try{
        const sql = "INSERT INTO public.schedule (currentPatient, firstName, lastName, email, phone, datePicked, timePicked, reason, timeRequested) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *"
        return await pool.query(sql, [
            currentPatient, firstName, lastName, email, phone, datePicked, timePicked, reason, timeRequested
        ])
    }
    catch(error){
      return error.message
    }
}



module.exports = {
    scheduleAppt
}