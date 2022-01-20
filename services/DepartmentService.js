const {Departments} = require('../models/model');

class DepartmentService {
    async createDepartment(name){
        const createdDepartment = await Departments.create(name)
        return createdDepartment
    }
    async getDepartments(){
        return (await Departments.findAll())
    }
}
module.exports = new DepartmentService();