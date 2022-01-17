const Router = require('express')
const router = new Router();
const userController = require('../controllers/userController')

router.post('/create',userController.createUser)
router.get('/getUsers',userController.getUsers)
router.get('/getAddress/:id',userController.getUserAddress)
module.exports = router