const {Users, Push} = require ("../models/model");
const mailer = require('../nodemailer')

class UserService {
    async createUser(user) {
        const createdUser = await Users.create({email:user.email,region:user.region})
        const userEmail =  createdUser.dataValues.email;
        const message = {
            to:`${userEmail}`,
            subject:'Успешная регистрация на рассылку оповещений',
            text:'sdfafdsaffsdafdsadfsa'
        }
        mailer(message)
        return createdUser
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