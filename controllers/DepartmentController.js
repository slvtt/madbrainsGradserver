const DepartmentService = require('../services/DepartmentService')
const {Departments} = require('../models/model')
class DepartmentController {
    async createDepartment(req,res){
        try {
            const {name} = req.body;
            const department = await DepartmentService.createDepartment({name})
            return res.json(department)
        } catch (e) {
            console.log(e)
        }
    }
    async getDep(req,res){
        try {
            const deps = await DepartmentService.getDepartments()
            return res.json(deps)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new DepartmentController();
