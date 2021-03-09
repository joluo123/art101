/*
 * Author: Johnny Luo <jluo42@ucsc.edu> and Ryan Masui <rmasui@ucsc.edu>
 * Section: 01A
 * Created: March 8, 2021
 * License: Public Domain
*/

runAPI();
function runAPI() {
// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "http://xkcd.com/info.0.json",
    // The data to send (will be converted to a query string)
    data: {
            // here is where any data required by the api
            //goes (check the api docs)
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(comicObj) {
        // do stuff
        console.log("This is working getting the information...");
        var textData = JSON.stringify(comicObj);
        var data = "";
        var imageURL = comicObj.img;
        var title = comicObj.title;
        var alt = comicObj.alt;
        console.log(alt);
        var img = "<img src=" + imageURL + " title=" + alt + ">";
        data += "<h2>" + title + "</h2>";
        data += img;
        printText(data);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        $("#output").html("Error:", textStatus, errorThrown);
    }
  })
}

//prints the data provided from the API onto the HMTL.
function printText(data) {
  $("#output").html(data);

}
