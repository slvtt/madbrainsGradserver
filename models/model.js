const sequelize = require('../db');
const {DataTypes} = require('sequelize');
const queryInterface = sequelize.getQueryInterface();

const Users = sequelize.define('users',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    email:{type:DataTypes.STRING},
    region:{type:DataTypes.STRING}
})

const Departments = sequelize.define('departments',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING}
})

const Event = sequelize.define('event',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING},
})

const Push = sequelize.define('push',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    description:{type:DataTypes.STRING},
    region:{type:DataTypes.STRING}
})

Departments.hasMany(Event)
Event.belongsTo(Departments)

Event.hasOne(Push)
Push.belongsTo(Event)

Push.hasMany(Users)
Users.belongsTo(Push)

module.exports = {Event,Users,Push,Departments};

