require('dotenv').config()
const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const models = require('./models/model')
const router = require('./routes/index')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/',router)

const start = async ()=> {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(process.env.PORT, ()=> console.log('server has started on port:',process.env.PORT))
    }catch (e) {
        console.log(e)
    }
}

start()

