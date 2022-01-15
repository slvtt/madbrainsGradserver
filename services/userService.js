const {Users} = require ("../models/model");

class UserService {
    async createUser(user) {
        return (await Users.create(user))

    }
    async getUsers(){
        return (await Users.findAll())
    }
}
module.exports = new UserService();