class Member { // create member
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
}

class Team { // create Team
    constructor(id, name) { // ID of the team and the team name
        this.id = id;
        this.name = name;
        this.members = []; // we won't pass this in - started as empty array of all the members that get added to this team
    }

    addMember(member) { // method - will take/add member and push into members array
        this.members.push(member);
    }

    deleteMember(member) { // method - will take/delete member
        let index = this.members.indexOf(member); // this will find index that the member is at in the this.members array of the Team class
        this.members.splice(index, 1); // splice will delete index member is located at and the 1 is for only removing 1.
    }
}

let teams = []; // array of teams - every team we create will go here
let teamId = 0; // each team will get its own ID and be incremented up each time a team is added

onClick("new-team", () => { // calling onClick function - everytime id new-team (create) is listening for click the action () will be an arrow function and 
    teams.push(new Team(teamId++, getValue("new-team-name"))); //teamId++ allows the value to be incremented each time a team is created - then the function getValue will produce new team name
    drawDOM();
})

function onClick(id, action) { // this allows us to not have to do the getElementById a number of times
    let element = document.getElementById(id); // re-useable function
    element.addEventListener("click", action); // action - whatever function gets passed into our onClick function thats whats going to happen when it matches that ID
    return element;
}

function getValue(id) {
    return document.getElementById(id).value; // returns the ID that was passed in and its value
}

function drawDOM() {
    let teamDiv = document.getElementById("teams"); // the div we will add all our teams to in HTML
    clearElement(teamDiv); // clear team div
    for (team of teams) { //iterate through team name
        let table = createTeamTable(team); // take a team build a table out of it
        let title = document.createElement("h2"); 
        title.innerHTML = team.name; // build a title based on data inside of our instance Team class
        title.appendChild(createDeleteTeamButton(team));
        teamDiv.appendChild(title);
        teamDiv.appendChild(table);
        for (member of team.members) { // add all the members to the team
            createMemberRow(team, table, member);
        }
    }
}

function createMemberRow(team, table, member) {
    let row = table.insertRow(2); // the table thats passed in - at position 2 because there will be data above this position
    row.insertCell(0).innerHTML = member.name; // members name in first cell
    row.insertCell(1).innerHTML = member.position; //member's position in second cell
    let actions = row.insertCell(2); // action to insert delete row button
    actions.appendChild(createDeleteRowButton(team, member));
}

function createDeleteRowButton(team, member) {
    let btn = document.createElement("button");
    btn.className = "btn btn-primary";
    btn.innerHTML = "Delete";
    btn.onclick = () => {
        let index = team.members.indexOf(member);
        team.members.splice(index, 1);
        drawDOM();
    };
    return btn;
}

function createDeleteTeamButton(team) {
    let btn = document.createElement('button');
    btn.className = "btn btn-primary";
    btn.innerHTML = "Delete Team";
    btn.onclick = () => {
        let index = teams.indexOf(team);
        teams.splice(index, 1);
        drawDOM();
    };
    return btn;
}

function createNewMemberButton(team) {
    let btn =  document.createElement("button");
    btn.className = "btn btn-primary";
    btn.innerHTML = "Create";
    btn.onclick = () => {
        team.members.push(new Member(getValue(`name-input-${team.id}`), getValue(`position-input-${team.id}`)));
        drawDOM();
    };
    return btn;
}

function createTeamTable(team) {
    let table = document.createElement("table");
    table.setAttribute("class", "table table-dark table-striped");
    let row = table.insertRow(0); //insert row
    let nameColumn = document.createElement("th"); // building out table
    let positionColumn = document.createElement("th");
    nameColumn.innerHTML = "Name";
    positionColumn.innerHTML = "Position";
    row.appendChild(nameColumn);
    row.appendChild(positionColumn);
    let formRow = table.insertRow(1); // place where we can insert new team members
    let nameTh = document.createElement("th");
    let positionTh = document.createElement("th");
    let createTh = document.createElement("th");
    let nameInput = document.createElement("input");
    nameInput.setAttribute("id", `name-input-${team.id}`);
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("class", "form-control");
    let positionInput = document.createElement("input");
    positionInput.setAttribute("id", `position-input-${team.id}`);
    positionInput.setAttribute("type", "text");
    positionInput.setAttribute("class", "form-control");
    let newMemberButton = createNewMemberButton(team);
    nameTh.appendChild(nameInput);
    positionTh.appendChild(positionInput);
    createTh.appendChild(newMemberButton);
    formRow.appendChild(nameTh);
    formRow.appendChild(positionTh);
    formRow.appendChild(createTh);
    return table;
}

function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}