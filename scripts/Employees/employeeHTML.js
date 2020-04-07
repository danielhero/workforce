const eachEmployee = (employeeObject, computerObject) => {
    return `
    <section class="employeeInfo">
        <h4>${employeeObject.firstName} ${employeeObject.lastName}</h4>
        <p>Age: ${employeeObject.age}</p>
        <div>
            <h5>Computer Assigned</h5>
            <p>Model: ${computerObject.year} ${computerObject.model}</p>
             
        </div>
    </section>
    `
}

export default eachEmployee