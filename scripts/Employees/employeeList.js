import { useEmployees } from "./employeeDataProvider.js"
import { useComputers } from "../Computers/computerDataProvider.js"
import { useDepartments } from "../Departments/departmentDataProvider.js"
import { useOffices } from "../Offices/officeDataProvider.js"
import eachEmployee from "./employeeHTML.js"
import { useCustomers } from "../Customers/customerDataProvider.js"
import { useEmployeeCustomers } from "../Customers_Employees/employeeCustomerDataProvider.js"




const contentTarget = document.querySelector(".employeesContainer")

const render = employeesToRender => {
    const computers = useComputers()
    const departments = useDepartments()
    const offices = useOffices()
    const customers = useCustomers()
    const customerRelationships = useEmployeeCustomers()
    
    
    

    contentTarget.innerHTML = employeesToRender.map(
        (employeeObject) => {
            // Find the related computer for the current employee and return the ID that matches.  Can we written as one line of code.
            const foundComputer = computers.find(computer => computer.id === employeeObject.computerId)

            const foundDepartment = departments.find(department => department.id === employeeObject.deptId)

            const foundOffice = offices.find(office => office.id === employeeObject.officeId)

            const relationship = customerRelationships.filter(customerRelationships => customerRelationships.employeeId === employeeObject.id)
            
            const foundCustomers = relationship.map(r => {
             
                return  customers.find(customer => r.customerId === customer.id)
            })
                
            return eachEmployee(employeeObject, foundComputer, foundDepartment, foundOffice, foundCustomers)
        }
    ).join("")
}

export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}

