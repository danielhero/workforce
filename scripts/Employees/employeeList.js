import { useEmployees } from "./employeeDataProvider.js"
import { useComputers } from "../Computers/computerDataProvider.js"
import { useDepartments } from "../Departments/departmentDataProvider.js"
import eachEmployee from "./employeeHTML.js"


const contentTarget = document.querySelector(".employeesContainer")

const render = employeesToRender => {
    const computers = useComputers()
    const departments = useDepartments()

    contentTarget.innerHTML = employeesToRender.map(
        (employeeObject) => {
            // Find the related computer for the current employee
            const foundComputer = computers.find(
                (computer) => {
                    return computer.id === employeeObject.computerId
                }
            )
            const foundDepartment = departments.find(
                (department) => {
                    return department.id === employeeObject.deptId
                }
            )
            return eachEmployee(employeeObject, foundComputer, foundDepartment)
        }
    ).join("")
}

export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}

