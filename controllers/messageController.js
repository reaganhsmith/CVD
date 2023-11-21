const utlities = require("../utilities")
const scheduleModel = require("../models/schedule-model")



async function buildSchedule(req, res, next){

    res.render("./schedule/index", {
        title: null,
        errors: null
      })
  } 

async function createAppointment(req, res, next){
    const {currentPatient, firstName, lastName, email, phone, datePicked, timePicked, reason} = req.body

    const formSubTime = Date.now();
    const dateObject = new Date(formSubTime);
    const year = dateObject.getUTCFullYear();
    const month = (dateObject.getUTCMonth() + 1).toString().padStart(2, '0'); 
    const day = dateObject.getUTCDate().toString().padStart(2, '0');
    const hours = dateObject.getUTCHours().toString().padStart(2, '0');
    const minutes = dateObject.getUTCMinutes().toString().padStart(2, '0');
    const seconds = dateObject.getUTCSeconds().toString().padStart(2, '0');

    const timeRequested = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;


    const apptInfo = await scheduleModel.scheduleAppt(
        currentPatient,
        firstName,
        lastName,
        email,
        phone,
        datePicked,
        timePicked,
        reason,
        timeRequested
  )

  if(apptInfo){
    req.flash("notice", "We got your request for an appointment and will get back to you shortly:)")
    res.render("./schedule/index", {
      errors: null
        

    })
  } else{
    req.flash("notice", "sorry unable to send message")
    res.status(501).render.render("./schedule/index", {
      errors: null
        
    })
  }
}
  
  
  module.exports = {
      buildSchedule,
      createAppointment
  }