const {Event,Departments} = require('../models/model');
const eventService = require('../services/eventService')
class EventController{
    async getEvents (req,res) {
        const events = await Event.findAll()
        return res.json(events)
    }
    async createEvents (req,res) {
        const {name,id} = req.body;
        const createdEvent = await eventService.createEvent(id,name)
        return res.json(createdEvent)
    }
}

module.exports = new EventController();