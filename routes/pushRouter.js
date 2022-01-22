const Router = require('express')
const router = new Router();
const pushController = require('../controllers/pushController')
router.get('/getPush/:eventName',pushController.getPushes)
/*router.get('/getPushEvent',pushController.getPushEvent)*/
router.post('/createPush',pushController.createPush)

module.exports = router;