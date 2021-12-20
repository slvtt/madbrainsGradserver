const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Events = sequelize.define('events',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    type:{type:DataTypes.STRING}
})

const Users = sequelize.define('users',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    phoneNumber:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING}
})
module.exports = {Events};