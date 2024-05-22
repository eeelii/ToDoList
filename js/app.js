// obtain the button 
const btnMenu = document.querySelector(".menu-btn");
// get the nav items 
const navItems = document.querySelector(".nav-items");

function showItems() {
    navItems.classList.toggle("show-items");
}

btnMenu.onclick = showItems;

// begin the To-do List app 
// get the image element 
const imgBtn = document.getElementById("activate__img");
// get the add to do list container 
const addLstDiv = document.querySelector(".add__todo__lst");
// get the button class element 
const list = document.getElementsByClassName("buttonlst");
// get the user-input div 
const userInputDiv = document.querySelector(".user-input");
// now get the users input value 
const userInput = document.getElementById("todo__item");
// now get the add button 
const addItem = document.getElementById("user-item");
// get the id of the button list 
const btnList = document.getElementById("lst__btn");
// create a function that will create an input once the image is clicked 
function addToDoLst() {
    userInputDiv.classList.toggle("hide__input");
}

// create a function that adds an item to the buttons
let counter = 0;
// create a function that resets the value of the input 
function resetInput() {
    userInput.value = "";
}
// create an input that will cross out the text for one of the list 
function crossOutCheckLst(e) {
    const itemSelected = e.target;
    itemSelected.classList.toggle("cross__out__text");
}

function appendItem() {
    const userValue = userInput.value;
    while (counter < list.length) {
        if (userValue === "") {
            addItem.innerHTML = ":(";
        } else {
            addItem.innerHTML = "Add";
            list[counter].innerHTML = ` ${counter + 1}. ${userValue}`;
            list[counter].style.display = "block";
            counter++;
            resetInput()
        };

        if (counter === list.length) {
            addItem.innerHTML = "Nope";
        }
        break;
    } //end of while loop here 

}  //end of function here 




// create a loop to cross_out all of the task list when done 
for (let i = 0; i < list.length; i++) {
    list[i].onclick = crossOutCheckLst;
}



addItem.onclick = appendItem;
imgBtn.onclick = addToDoLst;