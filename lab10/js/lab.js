/*
 * Author: Johnny Luo <jluo42@ucsc.edu> and Ryan Masui <rmasui@ucsc.edu>
 * Section: 01A
 * Created: February 15, 2021
 * License: Public Domain
*/

//declaring a button variable that looks for the id "my-button"
var button = document.getElementById("my-button");
//listens for the button click and runs the function findName();
button.addEventListener("click", findName);

function findName() {
  // the value is obtained by the text field from the html file.
  var userName = document.getElementById("user-name").value;
  var color = document.getElementById("color").value;
  var song = document.getElementById("song").value;

  console.log("userName = ", userName);
  //Splits the user string input into an array.
  var splitNameArray = userName.split(" ");
  console.log("split array = ", splitNameArray);
  //Sort the array and store that value into a variable.
  var sortNameArray = splitNameArray.sort();
  console.log("sort array = ", sortNameArray);
  //sortNameArray[0] = sortNameArray[0].charAt(0).toUpperCase();
  //Take the sub-strings in the array and convert it back to a stri()ng
  var nameFixed = sortNameArray.join('');
  console.log("nameFixed = ", nameFixed);
  //Deletes white space.
  nameFixed.trim();

  //Replaces the HTML div id = output with the name results
  document.getElementById("output").innerHTML =
  "<p>Your Name is Fixed: " + nameFixed + "<br></br>" +
  "Your Favorite Color is: " + color + "<br></br>" +
  "Your Favorite Song is: " + song + "<br></br></p>";

  //return the fixed array.
  return nameFixed;
}
