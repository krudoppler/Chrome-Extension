const buttonEl = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeads = []


// On button click 1. Adds the value to myLeads array, 2. Clears the input field, 3. Initiates the renderLeads function
buttonEl.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

// 1. Defines empty string, 2. Executes For loop using string template to add LI and A tag from the array, 3. Renders listItems in the unorderlist ID
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
    listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]} 
            </a>
        </li>
    `
    console.log(listItems)
    }
    ulEl.innerHTML = listItems
}
