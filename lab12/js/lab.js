/*
 * Author: Johnny Luo <jluo42@ucsc.edu> and Ryan Masui <rmasui@ucsc.edu>
 * Section: 01A
 * Created: February 22, 2021
 * License: Public Domain
*/

//sorting function for the houses
function sortingHat(str) {
  strLength = str.length;
  mod = strLength % 4;
  // array of Hogwarts houses
  houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];

// for loop that runs through the array and finds the name.
  for(i = 0; i <= houses.length; i++) {
    if(mod == i) {
      return(houses[mod]);
    }
  }
}

// event listener for the button that takes the input and runs the function.
var myButton = $("button");
$(myButton).click(function() {
    var name = $("input").val();
    console.log("the name is: " + name);
    var house = sortingHat(name);
    console.log("house is: " + house);
    //changeText = "<p> The Sorting Hat has sorted you into: " + house + "</p>";
    $("#output").html("<p> The Sorting Hat has sorted you into: " + house + "</p>");
    houseDescriptions(house);
});

// function that finds the house that was detected and prints the descriptions of the house.
function houseDescriptions(userHouse) {
  if(userHouse == "Gryffindor"){
    $("#output").append("<p> Gryffindor values bravery, daring, nerve, and chivalry. </p>");
  }
  else if(userHouse == "Ravenclaw") {
    $("#output").append("<p> Ravenclaw values intelligence, knowledge, curiosity, creativity and wit. </p>");
  }
  else if(userHouse == "Slytherin") {
    $("#output").append("<p> Slytherin House values ambition, leadership, self-preservation, cunning and resourcefulness. </p>");
  }
  else if(userHouse == "Hufflepuff") {
    $("#output").append("<p> Hufflepuff values hard work, dedication, patience, loyalty, and fair play. </p>");
  }
  else if(userHouse == "No Match") {
    $("#output").append("<p> No House. </p>");
  }
}
