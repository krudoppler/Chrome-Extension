const buttonEl = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
let myLeads = []

let localStorageLeads = JSON.parse(localStorage.getItem("myLeads"))
console.log(localStorageLeads)

if (localStorageLeads) {
    myLeads = localStorageLeads
    renderLeads()
}

deleteBtn.addEventListener("dblclick", function() {
    myLeads=[]
    localStorage.clear()
    renderLeads()
})

// On button click 1. Adds the value to myLeads array, 2. Clears the input field, 3. Initiates the renderLeads function
buttonEl.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
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
    }
    ulEl.innerHTML = listItems
}
