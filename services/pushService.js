const {Event, Push} = require("../models/model");

class PushService {
    // get event_name and push description
    async getPushes (eventName) {
        const pushesEvent = await Event.findOne({where:{name:eventName}}).then(events => {
            if (!events) return false
             return events.getPush().then(result => ({
                     eventName:events.name,
                     pushDescription:result.description,
                     pushRegion:result.region
                 })
             )
        })
        return pushesEvent
    }
    async createPush(description,region,eventName){
        const eventId = await Event.findOne({where:{name:eventName}})
            .then(result => result.id)
            .catch(() => false);

        if (eventId === false) {
            return false
        } else {
            const createdPush = await Push.create({description,region,eventId})
            return createdPush
        }
    }
}

module.exports = new PushService();