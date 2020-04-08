const eachEmployee = (employeeObject, computerObject, deptObject) => {
    return `
    <div class="employeeInfo">
        <header class="employeeInfo__name">
            <h1>${employeeObject.firstName} ${employeeObject.lastName}</h1>
            <h6>Age: ${employeeObject.age}</h6>
        </header>
        
        <section class="employeeInfo__computer">
            Currently using a ${computerObject.year} ${computerObject.model}.
        </section>

        <section class="employeeInfo__department">
            Works in the ${deptObject.deptName} department.
        </section>
    </div>
    `
}

export default eachEmployee