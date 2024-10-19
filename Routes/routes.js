const express = require("express");
const employeeController=require('../Controller/employeeController')

const routes=express.Router()

routes.post('/addemp',employeeController.addEmployee)
routes.get('/employee',employeeController.getEmployee)
routes.delete('/deleteemp/:id',employeeController.deleteEmployee)
routes.put('/updateemp/:id',employeeController.updateEmployee)

module.exports=routes