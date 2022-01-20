const {Departments, Event} = require("../models/model");

class EventService{
    async createEvent(idDep,name){
        const department = await Departments.findByPk(idDep)
        const departmentID = department.dataValues.id
        const createdEvent = await Event.create({name:name,departmentId:departmentID})
        return createdEvent
    }
}

module.exports = new EventService();