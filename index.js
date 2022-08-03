// let button = document.getElementById("my-button"); //button by ID which is for line 12 in index.html file (id="") - usually found by a single element as to why we use getElement rather than Elements.
// console.log(button);

let buttonsByTag = document.getElementsByTagName("button"); //button by tag names like (<button> or <p> or <h1> etc) - exhibited on all lines 12-16.
// console.log(buttonsByTag);

let buttonsByClassName = document.getElementsByClassName("my-class"); //or you can do it by class names - usually identified by multiple elements (ex: class="")
// console.log(buttonsByClassName); //console will only find 2 that identify with class "my-class" - button 3 and button 5

let buttonsByCSSSelector = document.querySelectorAll(".my-class"); //CSS locators - you can add button.my-class and this will reflect only the buttons with that class. But without button, it will console log 3 elements: buttons 3 and 5, plus hello world.
// console.log(buttonsByCSSSelector);

let button = document.getElementById("btn");
let content = document.getElementById("content")

button.addEventListener("click", () => { //add event takes in 2 parameters - click and function.
    if (content.innerHTML == "Goodbye.") {
        content.innerHTML = "Hello.";
    } else {
        content.innerHTML = "Goodbye."
    }
}); // document.getElementById("content").innerHTML = "Goodbye."; // innerHTML refers to the actual content reflected in the "content" line that we are requesting to change from Hello. to Goodbye.

document.getElementById("remove").addEventListener("click", () => { //again, listening for the click of the mouse, and passing in a function - THIS IS HOW WE REMOVE
    let idToRemove = document.getElementById("remove-id").value;
    let elementToRemove = document.getElementById(idToRemove);
    elementToRemove.parentNode.removeChild(elementToRemove); //this is telling comp what we want to happen. find parent of content and then remove child from parent - Removing hello as parent
    document.getElementById("remove-id").value = "";
});

let id = 0;

//adding elements - creating/adding
// document.getElementById("add").addEventListener("click", () => {
//     var parent = document.getElementById("paragraphs");
//     var newElement = document.createElement("p");
//     newElement.innerHTML = "this is a new paragraph.";
//     parent.appendChild(newElement);
// });

//adding elements pt. 2 - control what paragraphs say
document.getElementById("add").addEventListener("click", () => {
    var parent = document.getElementById("paragraphs");
    var newElement = document.createElement("p");
    newElement.innerHTML = document.getElementById("new-text").value; //get value of new text element
    newElement.setAttribute("id", id++);
    parent.appendChild(newElement);
    document.getElementById('new-text').value = "";
});
