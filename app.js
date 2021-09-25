const employees = [
    {
    id: 1,
    firstName: "Mick",
    lastName: "Jagger",
    email: "mick@jagger"

    },
    {
    id: 2,
    firstName: "Maria",
    lastName: "Kondratyeva",
    email: "maria@kondratyeva"
    },
    {
    id: 3,
    firstName: "John",
    lastName: "Doe",
    email: "john@doe"
    },
    {
        id: 4,
        firstName: "Anna",
        lastName: "Karenyina",
        email: "anna@karenyina"
}
]

const employeesList = employees.map((emp) =>{
    const attributeDiv = document.createElement('div')
    const attributeList = document.createElement('ul')

    const firstNameElement = document.createElement('li')
    const lastNameElement = document.createElement('li')
    const emailElement = document.createElement('li')


    firstNameElement.innerHTML = `First Name: ${emp.firstName}` 
    lastNameElement.innerHTML = `Last Name: ${emp.lastName}` 
    emailElement.innerHTML = `Email: ${emp.email}` 

    attributeList.appendChild(firstNameElement)
    attributeList.appendChild(lastNameElement)
    attributeList.appendChild(emailElement)

    attributeDiv.appendChild(attributeList)

    return attributeDiv




})


document.addEventListener('DOMContentLoaded', (e) =>{
    const container = document.querySelector('#root')
    employeesList.forEach(val => container.appendChild(val).addEventListener('dblclick', () =>{
        alert(val.firstChild.firstChild.firstChild.textContent)
    }))
})