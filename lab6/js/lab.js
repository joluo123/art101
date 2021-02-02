/*
 * Author: Johnny Luo <jluo42@ucsc.edu> and Ryan Masui <rmasui@ucsc.edu>
 * Section: 01A
 * Created: February 2, 2021
 * License: Public Domain
*/

// Creating an array that contains my main methods of transportation.
myTransport = ["My Car ", " Bike ", " Bus ", " Carpool ", " Boosted Board "];

// Creating an object type that contains specific data for my primary vechicle.
myMainRide = {
  make: "Honda",
  model: "Civic Sport Hatchback",
  color: "Gray",
  year: 2017,
  age: function () {
    return 2021 - year;
  }
}

//output from index.html file
document.writeln("<p> My Sources of Transportation: ", myTransport, "</p>", "<br></br>");
document.writeln("<p> My Main ride:  <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre> </p>");
