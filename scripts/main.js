import { EmployeeList } from "./Employees/employeeList.js";
import { getEmployees } from "./Employees/employeeDataProvider.js";
import { getComputers } from "./Computers/computerDataProvider.js";


getEmployees()
    .then(getComputers)
    .then(EmployeeList) 