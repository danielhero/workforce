const eachEmployee = (employeeObject, computerObject, deptObject, officeObject) => {
    return `
    <div class="employeeInfo">
        <header class="employeeInfo__name">
            <h3>${employeeObject.firstName} ${employeeObject.lastName}</h3>
            <h6></h6>
        </header>
        
        <section class="employeeInfo__age">
            Age: ${employeeObject.age}
        </section>
        
        <section class="employeeInfo__computer">
            Currently using a ${computerObject.year} ${computerObject.model}.
        </section>

        <section class="employeeInfo__department">
            Works in the ${deptObject.deptName} department at the ${officeObject.city} office.
        </section>
    </div>
    `
}

export default eachEmployee