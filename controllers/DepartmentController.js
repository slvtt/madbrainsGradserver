const DepartmentService = require('../services/DepartmentService')
const {Departments} = require('../models/model')

class DepartmentController {
    async createDepartment(req,res){
        try {
            const {name} = req.body;
            const department = await DepartmentService.createDepartment({name})
            return res.json(department)
        } catch (e) {
            res.status(500).json({message:'Непредвиденная ошибка(((('})
        }
    }
    async getDep(req,res){
        try {
            const deps = await DepartmentService.getDepartments()
            return res.json(deps)
        } catch (e) {
            res.status(500).json({message:'Непредвиденная ошибка(((('})
        }
    }
    async getDepEvent(req,res){
        try {
            const {depName} = req.params;
            await Departments.findOne({where:{name:depName}}).then(dep=>{
                if(!dep) return res.status(404).jsonp({message:'department not found'});
                dep.getEvents().then(result=>{
                    const events_dep = result.map(result => ({event:result.name,department:dep.name}))
                    return res.json(events_dep)
                })
            })
        }catch (e) {
            res.status(500).json({message:'Непредвиденная ошибка(((('})
        }
    }
    async deleteDepartment(req,res){
        try {
            const {departmentName} = req.body
            const deletedDepartment = await Departments.destroy({where:{name:departmentName}})
            return res.json(deletedDepartment)
        }catch (e){
            console.log(e)
        }
    }
}

module.exports = new DepartmentController();
