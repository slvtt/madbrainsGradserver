const sequelize = require('../db');
const {DataTypes} = require('sequelize');
const queryInterface = sequelize.getQueryInterface();


const Users = sequelize.define('users',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    phoneNumber:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING},
    address:{type:DataTypes.STRING}
})

const Departments = sequelize.define('departments',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING}
})

const Event = sequelize.define('event',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING},
    idDepartment:{type:DataTypes.INTEGER},
})

const Push = sequelize.define('push',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    description:{type:DataTypes.STRING},
    idEvent:{type:DataTypes.INTEGER},
    region:{type:DataTypes.STRING}
})

Event.hasMany(Departments)
Departments.belongsTo(Event)

Event.hasOne(Push)
Push.belongsTo(Event)

Push.hasMany(Users)
Users.belongsTo(Push)

module.exports = {Event,Users};