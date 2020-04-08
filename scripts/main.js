import { EmployeeList } from "./Employees/employeeList.js";
import { getEmployees } from "./Employees/employeeDataProvider.js";
import { getComputers } from "./Computers/computerDataProvider.js";
import { getDepartments } from "./Departments/departmentDataProvider.js";
import { getOffices } from "./Offices/officeDataProvider.js";


getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getOffices)
    .then(EmployeeList) 