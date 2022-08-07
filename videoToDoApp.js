let id = 0;

document.getElementById("add").addEventListener("click", () => { //when we click add ID in html for create button, it will listen for click sound. Function allows for executable when create is clicked.
    let createdDate = new Date(); // we aren't passing an argument into this so this will provide current time/date
    let table = document.getElementById("list"); // reference to our table
    let row = table.insertRow(1); // create new row - we want it at the 2nd position because table header is position 1 [0]
    row.setAttribute("id", `item-${id}`); //set attributes for the rows we created - each row is going to get an item called ID
    row.insertCell(0).innerHTML = document.getElementById("new-task").value; //cell 0 is Task on table
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`; // cell 1 is Date Created in table - this template literal will diplay the date the task was entered
    row.insertCell(2).innerHTML = document.getElementById("new-start-date").value; // cell 2 is Start Date in table
    row.insertCell(3).innerHTML = document.getElementById("new-end-date").value; // cell 3 is Due Date in table
    let actions = row.insertCell(4); // cell 4 is actions in table - create button that is our actions button
    actions.appendChild(createDeleteButton(id++)); // create a delete button -  this also increments the task/IDs created from 0+
    document.getElementById("new-task").value = ""; // set task to blank
})

function createDeleteButton(id) { //takes in an ID
    let btn = document.createElement("button"); // creates button - tag of element we want to create
    btn.className = "btn btn-primary";
    btn.id = id;
    btn.innerHTML = "Delete"; // this creates the delete string button
    btn.onclick = () => { // equivalent to using addEventListener
        // console.log(`Delete row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}