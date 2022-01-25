const {Event, Push, Users} = require("../models/model");
const {connectionString} = require("pg/lib/defaults");

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
    // create push and update Users' table in attribute pushId
    async createPush(description,region,eventName){
        const eventId = await Event.findOne({where:{name:eventName}})
            .then(result => {
                return result.id
            })
            .catch(() => false);
        if (eventId === false) {
            return false
        } else {
            const createdPush = await Push.create({description,region,eventId})
            const PushId = createdPush.dataValues.id;
            await Users.findAll({where: {region:region}})
                .then(users => users.map(
                    user => user.update(
                        {pushId:PushId},
                        {where: {pushId:PushId - 1 || null || PushId !== pushId}}
                    )
                ))
            return createdPush
        }
    }

    async getLatestPush(){
        const latestPush = await Push.findAll({
            limit:1,
            order:[['createdAt', 'DESC']]
        })
        return latestPush
    }
}

module.exports = new PushService();