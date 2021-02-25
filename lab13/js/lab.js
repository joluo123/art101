/*
 * Author: Johnny Luo <jluo42@ucsc.edu> and Ryan Masui <rmasui@ucsc.edu>
 * Section: 01A
 * Created: February 24, 2021
 * License: Public Domain
*/

var myButton = $("button");
myButton.click(function() {

  var max = $("input").val();
  FizzBuzz(max);
});

function FizzBuzz (maxNums) {
  for(var nums = 1; nums <= maxNums; nums++) {
    findFactors(nums);
  }
}

//this function checks for single factors.
function findFactors(num) {
  var strOutput = "";
  if (num % 35 == 0) {
    strOutput += "BuzzBoom!";
    outputString(num, strOutput);
    console.log("BuzzBoom!");
  } else if (num % 21 == 0) {
      strOutput += "FizzBoom!";
      outputString(num, strOutput);
      console.log("FizzBoom!");
  } else if (num % 15 == 0) {
      strOutput += "FizzBuzz!";
      outputString(num, strOutput);
      console.log("FizzBuzz!");
  } else if (num % 6 == 0) {
    strOutput += "FizzBang!";
    outputString(num, strOutput);
  } else if (num % 10 == 0){
    strOutput += "BuzzBang!";
    outputString(num, strOutput);
  } else if (num % 14 == 0 ){
    strOutput += "BoomBang!";
    outputString(num, strOutput);
  } else if (num % 3 == 0) {
      strOutput += "Fizz!";
      outputString(num, strOutput);
      console.log("Fizz!");
  } else if (num % 5 == 0) {
      strOutput += "Buzz!";
      outputString(num, strOutput);
      console.log("Buzz!");
  } else if (num % 7 == 0) {
      strOutput += "Boom!";
      outputString(num, strOutput);
      console.log("Boom!");
  } else if (num % 2 == 0){
      strOutput += "Bang!";
      outputString(num, strOutput);
      console.log("Bang!");
  } else {
      console.log(num);
      outputString(num, strOutput);
    }
}

//function to output the string to the div id = "output".
function outputString(num, output) {
    $("#output").append("<p>" + num + ": " + output + "</p>");
}
