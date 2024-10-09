const buttonEl = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeads = []



buttonEl.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    listItems += "<li>" + myLeads[i] + "</li>"
    }
    ulEl.innerHTML = listItems
}
