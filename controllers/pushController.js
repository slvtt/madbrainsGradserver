const PushService = require('../services/pushService');
class PushController {
    async getPushes (req,res){
        const {eventName} = req.params
        const pushes = await PushService.getPushes(eventName)
        if (!pushes) return res.status(404).json({errMessage:'Такого события не существует'})
        return res.json(pushes)
    }
    async createPush (req,res){
       const {description,region,eventName} = req.body;
       const createdPush = await PushService.createPush(description,region,eventName)
        if (createdPush === false ) return res.json('такого события не существует')
        return res.json(createdPush)
    }
}

module.exports = new PushController();