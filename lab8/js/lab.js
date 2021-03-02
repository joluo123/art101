/*
 * Author: Johnny Luo <jluo42@ucsc.edu> and Ryan Masui <rmasui@ucsc.edu>
 * Section: 01A
 * Created: February 8, 2021
 * License: Public Domain
*/

function firstThing(test) {
  console.log(test + ": This is from the First Thing Function.");
}
function secondThing(test) {
  console.log(test + ": This is from the Second Thing Function.");
}

function thirdThing(test){
  console.log(test + ": This is from the Third Thing Function.");
}

//Multiple function that takes in two parameters and multiples it.
function myMultiplier(num1, num2) {
  var product = num1 * num2;
  document.writeln("<div id = divNameContent> <p> Your Answer: " + num1 + "*" + num2 + " = " + product + "</p></div>");
  console.log(product + ": This is the product you asked for.");
  return product;
}

//testing the calculator for a callback.
 var n1 = window.prompt("Enter the First Number");
 debugger;
 var n2 = window.prompt("Enter the Second Number");
 debugger;
 var findProduct = Math.round(myMultiplier(n1, n2));
 debugger;
 document.writeln("<div id = divNameContent> <p> This is the number rounded: " + findProduct + "</p></div>");

//First test, calling the three function in order using "TEST 1" as the argument.
firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

//Second test, using setTimeout() and an anonymous function to call all 3.
setTimeout(function() { // all functions will be called after 0 second.
  firstThing("TEST 2");
}, 0);

setTimeout(function() {
  secondThing("TEST 2");
}, 0);

setTimeout(function() {
  thirdThing("TEST 2");
}, 0);

//Third test, adding time so the functions will print in the order 2, 3, 1
setTimeout(function() { // function will print in 3 seconds
  firstThing("TEST 3");
}, 3000);

setTimeout(function() { // function will print in 1 second
  secondThing("TEST 3");
}, 1000);

setTimeout(function() { // function will print in 2 seconds
  thirdThing("TEST 3");
}, 2000);
