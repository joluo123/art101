/*
 * Author: Johnny Luo <jluo42@ucsc.edu> and Ryan Masui <rmasui@ucsc.edu>
 * Section: 01A
 * Created: February 10, 2021
 * License: Public Domain
*/

// Create a new variable that takes the find the output element in the HTML file.
var outputEl = document.getElementById("output");

// Create a new element for the paragraph ('p') and assigning it to a new variable.
var new1El = document.createElement("p");
// Change the innerHTML text of the varialbe new1El.
new1El.innerHTML = "This the new first element.";
// Changing the CSS styles in the first element (color, fontStyle, and fontSize).
new1El.style.color = "red";
new1El.style.fontStyle = "italic";
new1El.style.fontSize = "50px";
// Create another element for that contains a list tag ('li') and assigning it to a new variable.
var new2El = document.createElement("li");
// Changing the text in the new element.
new2El.innerHTML = "This is the new second element. ";
// Changing the CSS styles in the second element (color, fontStyle, fontSize).
new2El.style.color = "blue";
new2El.style.fontStyle = "bold";
new2El.style.fontSize = "25px";
//creating a text node
var text = document.createTextNode("I was created with a Text Node.");
new2El.appendChild(text);
//creating a third node to explore the prepend DOM function.
var new3EL = document.createElement("h1");
var topText = document.createTextNode("This Goes on Top");
new3EL.appendChild(topText);
new3EL.style.color = "Gray";

//Appending the two elements one at a time to the HTML page.
outputEl.prepend(new3EL);
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
