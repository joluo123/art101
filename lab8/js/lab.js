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
