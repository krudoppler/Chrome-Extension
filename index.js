const buttonEl = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
let myLeads = []

let localStorageLeads = JSON.parse(localStorage.getItem("myLeads"))
console.log(localStorageLeads)

if (localStorageLeads) {
    myLeads = localStorageLeads
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
    listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]} 
            </a>
        </li>
    `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    myLeads=[]
    localStorage.clear()
    render(myLeads)
})

// On button click 1. Adds the value to myLeads array, 2. Clears the input field, 3. Initiates the renderLeads function
buttonEl.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

