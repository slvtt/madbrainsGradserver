const Router = require('express')
const router = new Router();
const userController = require('../controllers/userController')

router.post('/create',userController.createUser)
router.get('/getUsers',userController.getUsers)
module.exports = router