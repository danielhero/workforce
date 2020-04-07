import { useEmployees } from "./employeeDataProvider.js"
import { useComputers } from "../Computers/computerDataProvider.js"
import eachEmployee from "./employeeHTML.js"

const contentTarget = document.querySelector(".employeesContainer")

const render = employeesToRender => {
    const computers = useComputers()

    contentTarget.innerHTML = employeesToRender.map(
        (employeeObject) => {
            // Find the related computer for the current employee
            const foundComputer = computers.find(
                (computer) => {
                    return computer.id === employeeObject.computerId
                }
            )
            return eachEmployee(employeeObject, foundComputer)
        }
    ).join("")
}

export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}

