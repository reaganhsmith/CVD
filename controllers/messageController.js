const utlities = require("../utilities")
const scheduleModel = require("../models/schedule-model")



async function buildSchedule(req, res, next){

    res.render("./schedule/index", {
        title: null,
      })
  } 

async function createAppointment(req, res, next){
    const {currentPatient, firstName, lastName, email, phone, datePicked, timePicked, reason} = req.body
    const apptInfo = await scheduleModel.scheduleAppt(
        currentPatient,
        firstName,
        lastName,
        email,
        phone,
        datePicked,
        timePicked,
        reason 
  )

  if(apptInfo){
    
    res.render("./schedule/index", {
        title: "Congrats we have got your schedule request",

    })
  } else{
    req.flash("notice", "sorry unable to send message")
    res.status(501).render.render("./schedule/index", {
        
    })
  }
}
  
  
  module.exports = {
      buildSchedule,
      createAppointment
  }