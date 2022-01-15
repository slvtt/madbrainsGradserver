
const UserService = require('../services/userService')

class UserController{
    async createUser(req,res) {
        const {phoneNumber,email} = req.body;
        const user = await UserService.createUser({phoneNumber,email})
        return res.json(user)
    }
    async getUsers(req,res){
        const users = await UserService.getUsers()
        return res.json(users)
    }

}
module.exports = new UserController()