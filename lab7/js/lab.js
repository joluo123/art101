/*
 * Author: Johnny Luo <jluo42@ucsc.edu> and Ryan Masui <rmasui@ucsc.edu>
 * Section: 01A
 * Created: February 3, 2021
 * License: Public Domain
*/

//creating a function that takes the user-input and sorts it.
function findName() {
  //prompts a window asking for user name input and stores that input into a variable userName.
  var userName = window.prompt("Hello, what is your name?");
  console.log("userName = ", userName);
  //Splits the user string input into an array.
  var splitNameArray = userName.split(" ");
  console.log("split array = ", splitNameArray);
  //Sort the array and store that value into a variable.
  var sortNameArray = splitNameArray.sort();
  console.log("sort array = ", sortNameArray);
  //Take the sub-strings in the array and convert it back to a string
  var nameFixed = sortNameArray.join('');
  console.log("nameFixed = ", nameFixed);
  //return the fixed array.
  return nameFixed;
}

//Output
document.writeln("<p> Your Name is: " , findName(), "</p> </br>");
