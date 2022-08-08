const paragraphInput = document.getElementById("p-input"); // find the textbox
const paragraphs = document.querySelector("#p-div");

document.getElementById("p-button").addEventListener("click", () => {
    // console.log("This Works!");
    const newEntry = paragraphInput.value;
    const para = document.createElement("div");
    // console.log(para);
    para.textContent = newEntry; // text content to allow paragraphs to be seen
    paragraphs.appendChild(para);
    paragraphInput.value = "";
})





// const textbox = document.getElementById("p-input");
//     console.log("testing:", textbox);

// const paragraph = document.createTextNode("#p-div");
//     console.log("testing this section", paragraph);

// function addNewParagraph () {
//     const addParagraph = textbox.value;

//     const para = document.createElement("textarea")

//     para.textContent = addParagraph;

//     btn.onclick = () => {
//     const newpara = document.getElementById()
//     // para.remove();
//     };

//     paragraph.appendChild(para);
// }