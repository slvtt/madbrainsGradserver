const Router = require('express')
const router = new Router();
const DepartmentController = require('../controllers/DepartmentController');

router.post('/create',DepartmentController.createDepartment)
router.get('/get',DepartmentController.getDep)
router.get('/getDepEvent/:depName',DepartmentController.getDepEvent)
router.delete('/deleteDepartment' ,DepartmentController.deleteDepartment)

module.exports = router