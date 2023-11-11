const utlities = require("../utilities")
const scheduleModel = require("../models/schedule-model")



async function buildSchedule(req, res, next){

    res.render("./schedule/index", {
      })
  } 

async function createAppointment(req, res, next){
    const {currentPatient,firstName, lastName, email, phone, day } = req.body
    const apptInfo = await messageModel.sendMessage(
        currentPatient,
  )
}
  
  
  module.exports = {
      buildSchedule,
      createAppointment
  }