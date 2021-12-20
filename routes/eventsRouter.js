const Router = require('express')
const router = new Router();
const eventController = require('../controllers/eventController')

router.get('/get',eventController.getEvents)
router.post('/create',eventController.createEvents)
module.exports = router