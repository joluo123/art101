/*
 * Author: Johnny Luo <jluo42@ucsc.edu> and Ryan Masui <rmasui@ucsc.edu>
 * Section: 01A
 * Created: February 3, 2021
 * License: Public Domain
*/

//When entering the user will be prompt to enter their input name.
var enterName = window.prompt("Hello, what is your name?");
// The input is then stored into this new variable wherethe function will be called to fix.
var name = findName(enterName);
//creating a function that takes the user-input and sorts it.
function findName(enterName) {
  //prompts a window asking for user name input and stores that input into a variable userName.
  var userName = enterName;
  console.log("userName = ", userName);
  //Splits the user string input into an array.
  var splitNameArray = userName.split(" ");
  console.log("split array = ", splitNameArray);
  //Sort the array and store that value into a variable.
  var sortNameArray = splitNameArray.sort();
  console.log("sort array = ", sortNameArray);
  //sortNameArray[0] = sortNameArray[0].charAt(0).toUpperCase();
  //Take the sub-strings in the array and convert it back to a string
  var nameFixed = sortNameArray.join('');
  console.log("nameFixed = ", nameFixed);
  //Deletes white space.
  nameFixed.trim();
  //return the fixed array.
  return nameFixed;
}

//Output with CSS style sheet.
document.writeln("<p> <div id = divNameContent> Your Name is: " , name, "</p> </div></br>");
