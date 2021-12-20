const Router = require('express')
const router = new Router()
const eventRouter = require('./eventsRouter')
const userRouter = require('./userRouter')
router.use('/event',eventRouter)
router.use('/user',userRouter)
module.exports = router