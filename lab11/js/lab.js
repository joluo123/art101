/*
 * Author: Johnny Luo <jluo42@ucsc.edu> and Ryan Masui <rmasui@ucsc.edu>
 * Section: 01A
 * Created: February 17, 2021
 * License: Public Domain
*/

//finding the id tags for the challenge and assinging them to a variable.
var challenge = $("#challenge");
var problems = $("#problems");
var results = $("#results");
var output = $("#output");
var isChanged = false;

$(document).ready(function() {
  //creating a button for the challenge section.
  var cButton = $("<p> <button>Challenge Button Increase Font </button> </p>");
  //cButton.append(cButtonText);
  challenge.append(cButton); //add button to challenge section.

  //creaing a button for the problems Section.
  var pButton = $("<p><button>Problem Button Increase Font </button> </p>");
  problems.append(pButton); //add button to problems section.

  //creating a button for the results section.
  var rButton = $("<p> <button> Result Button Increase Font </button> </p>")
  results.append(rButton); //add button to results section.

  //changes another button's color.
  var buttonColorChange = $("<p> <button> Button Color Changer </button> </p>");
  output.append(buttonColorChange);
  //event handler for challenge section.
  $(cButton).click(function() {
    console.log("you have clicked challenge.");
    challenge.toggleClass("fontSize");
    challenge.toggleClass("red");

  });

  //event handler for the problem section.
  $(pButton).click(function() {
    console.log("you have clicked problems.");
    problems.toggleClass("fontSize");
    problems.toggleClass("green");

  });

  //event handler for the results section.
  $(rButton).click(function() {
    console.log("you have clicked results.");
    results.toggleClass("fontSize");
    results.toggleClass("blue");
  });

//Button Color Changer.
  $(buttonColorChange).click(function() {
    if(isChanged == false) {
      console.log("clicking color button");
      challenge.removeClass("red");
      challenge.toggleClass("black");
      problems.removeClass("green");
      problems.toggleClass("black");
      results.removeClass("blue");
      results.toggleClass("black");
      isChanged == true;
    } if(isChanged == true) {
      challenge.removeClass("black");
      challenge.toggleClass("red");
      problems.removeClass("black");
      problems.toggleClass("green");
      results.removeClass("black");
      results.toggleClass("blue");
      isChanged == false;
    }
  })
});
