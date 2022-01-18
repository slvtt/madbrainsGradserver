const UserService = require('../services/userService')

class UserController{
    async createUser(req,res) {
        const {phoneNumber,email,address} = req.body;
        const user = await UserService.createUser({phoneNumber,email,address})
        return res.json(user)
    }
    async getUsers(req,res){
        const users = await UserService.getUsers()
        return res.json(users)
    }
    async getUserAddress (req,res) {
        try {
           const userAddress = await UserService.getAddress(req.params.id);
           return res.json(userAddress)
        }catch (e) {
            res.status(500).json(e)
        }
    }
}
module.exports = new UserController()