const {Users} = require('../models/model');
class UserController{
    async createUser(req,res) {
        const {phoneNumber,email} = req.body;
        const user = await Users.create({phoneNumber,email})
        return res.json(user)
    }
    async getUsers(req,res){
        const users = await Users.findAll()
        return res.json(users)
    }

}
module.exports = new UserController()