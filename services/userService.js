const {Users} = require ("../models/model");
const mailer = require('../nodemailer')

class UserService {
    async createUser(user) {
        const createdUser = await Users.create(user)
        const userEmail =  createdUser.dataValues.email;
        const message = {
            to:`${userEmail}`,
            subject:'Успешная регистрация на рассылку оповещений',
            text:'sdfafdsaffsdafdsadfsa'
        }
        mailer(message)
        return user
    }
    async getUsers(){
        return (await Users.findAll())
    }
    async getAddress(id){
        if (!id) {
            throw new Error('Не указан идентификатор')
        }
        const address = await Users.findByPk(id,{
            attributes:{
                exclude:['createdAt','updatedAt'],
            },
        })
        return address
    }
}
module.exports = new UserService();