const Router = require('express')
const router = new Router()
const eventRouter = require('./eventsRouter')
const userRouter = require('./userRouter')
const departmentRouter = require('./departmentRouter')
const pushRouter = require('./pushRouter')

router.use('/event',eventRouter)
router.use('/user',userRouter)
router.use('/department',departmentRouter)
router.use('/push',pushRouter)

module.exports = router