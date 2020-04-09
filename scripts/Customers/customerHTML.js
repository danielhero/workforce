const eachCustomer = (customerObject, employeeArray) => {
    return `
    <div class="customerInfo">
        <header class="customerInfo__name">
            <h3>${customerObject.name}</h3>
        </header>

        <section class="customerInfo__employees">
            ${customerObject.name} is currently working with the following employees:
                <ul class="employeeListContainer">
                ${employeeArray.map(employee => `
                <li> ${employee.firstName} ${employee.lastName}</li>
                `).join("")}
                </ul>
        </section>
    </div>
    `
}

export default eachCustomer