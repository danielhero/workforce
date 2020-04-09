
import { useCustomers } from "../Customers/customerDataProvider.js"
import { useEmployeeCustomers } from "../Customers_Employees/employeeCustomerDataProvider.js"
import { useEmployees } from "../Employees/employeeDataProvider.js"
import eachCustomer from "./customerHTML.js"




const contentTarget = document.querySelector(".customersContainer")

const render = customersToRender => {
    const employees = useEmployees()
    const employeeRelationships = useEmployeeCustomers()
    

    contentTarget.innerHTML = customersToRender.map(
        (customerObject) => {
            
            const relationship = employeeRelationships.filter(employeeRelationships => employeeRelationships.customerId === customerObject.id)
            
            const foundEmployees = relationship.map(r => {
            
                return  employees.find(employee => r.employeeId === employee.id)
            })
                
            return eachCustomer(customerObject, foundEmployees)
        }
    ).join("")
}

export const CustomerList = () => {
    const customers = useCustomers()

    render(customers)
}