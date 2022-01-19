const {Event} = require('../models/model')
class EventController{
    async getEvents (req,res) {
        const events = await Event.findAll()
        return res.json(events)
    }
    async createEvents (req,res) {
        const {type} = req.body;
        const event = await Event.create({type})
        return res.json(event)
    }
}

module.exports = new EventController();