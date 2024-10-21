// JS Event Listeners 

// An event is an action performed by the user on a website
// E.g. clicking a button, pressing a keyboard

// Always add an ID to any elemt that JavaScript needs to find (e.g. buttons and inputs)

// addEventListeners("event", functions) command is used to "turn on" a button
// getElementById("ID-name") command tells JavaScript to look for an elemnt using the ID
// Afunction is a group of code that runs when called on.
// Name your function similar to how you name variables.

// Console error:  Cannot read properties of null. This is almost always a spelling mistake on
// Console errors give you the line of code where the error was found.

document.getElementById("pizza-btn").addEventListener("click", orderPizza);

// function definition
function orderPizza() {
var size = prompt("What size pizza?");
var topping1 = prompt("First topping?");
var topping2 = prompt("Second topping?");

var output = `Your ${size} pizza with ${topping1} and ${topping2} will be ready in 15 minutes!`;

alert(output);
}


document.getElementById("greet-btn").addEventListener("click", greet);

function greet() {
    // input: get the name and city from the user
    let userName = prompt("What is your name?");
    let userCity = prompt("What city do you live in?");

    // process: create the output sentence
    let output = "Hello, " + userName + " from " + userCity + "!";

    // output: send the output to the console
    console.log(output);
}


document.getElementById("pet-btn").addEventListener("click", pet);

 function pet() {
    let number1 = prompt("Give a number");
    let pet1 = prompt("Give a pet");
    let number2 = prompt("Give second number");
    let pet2 = prompt("Give second animal");
    let output = "I own " + number1 + " " + pet1 + " and " + number2 + " " + pet2;
    alert(output);
}

document.getElementById("par1").addEventListener("click", par1);
function par1() {
    alert("disguise.")
}


document.getElementById("par2").addEventListener("click", par2);
function par2() {
    alert("dozen.")
}

document.getElementById("par3").addEventListener("click", par3);
function par3() {
    alert("never.")
}

document.getElementById("par4").addEventListener("click", par4);
function par4() {
    alert("No Gain.")
}

document.getElementById("par5").addEventListener("click", par5);
function par5() {
    alert("when you're having fun.")
}
