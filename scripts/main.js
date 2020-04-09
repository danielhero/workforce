import { EmployeeList } from "./Employees/employeeList.js";
import { getEmployees } from "./Employees/employeeDataProvider.js";
import { getComputers } from "./Computers/computerDataProvider.js";
import { getDepartments } from "./Departments/departmentDataProvider.js";
import { getOffices } from "./Offices/officeDataProvider.js";
import { getCustomers } from "./Customers/customerDataProvider.js";
import { getEmployeeCustomers } from "./Customers_Employees/employeeCustomerDataProvider.js";
import { CustomerList } from "./Customers/customerList.js";




getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getOffices)
    .then(getCustomers)
    .then(getEmployeeCustomers)
    .then(EmployeeList) 

getCustomers()
    .then(getEmployees)
    .then(getEmployeeCustomers)
    .then(CustomerList)