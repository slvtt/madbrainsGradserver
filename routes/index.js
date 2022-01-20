const Router = require('express')
const router = new Router()
const eventRouter = require('./eventsRouter')
const userRouter = require('./userRouter')
const departmentRouter = require('./departmentRouter')

router.use('/event',eventRouter)
router.use('/user',userRouter)
router.use('/department',departmentRouter)

module.exports = router