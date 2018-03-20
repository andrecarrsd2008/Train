// START CODING BELOW!!

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBhdtTtPCgkUrclwKRfJowuIWysElFoIzo",
  authDomain: "fir-a0834.firebaseapp.com",
  databaseURL: "https://fir-a0834.firebaseio.com",
  projectId: "fir-a0834",
  storageBucket: "fir-a0834.appspot.com",
  messagingSenderId: "458044638999"
};
firebase.initializeApp(config);

var database = firebase.database();

// Initial Values
var name = "";
var destination = "";
var frequency = "";
var next = "";
var minutes = "";

// Capture Button Click
$("#add-user").on("click", function () {
  // Don't refresh the page!
  event.preventDefault();

  // YOUR TASK!!!
  // Code in the logic for storing and retrieving the most recent user.
  // Don't forget to provide initial data to your Firebase database.
  name = $("#name-input").val().trim();
  destination = $("#dest-input").val().trim();
  frequency = $("#freq-input").val().trim();
  //minutes = $("#minutes-input").val().trim();
  console.log(name)

  database.ref().push({
    name: name,
    destination: destination,
    frequency: frequency,

  });



});

// Firebase watcher + initial loader HINT: .on("value")
database.ref().on("child_added", function (snapshot) {

//   // Log everything that's coming out of snapshot
//   console.log(snapshot.val());
//   console.log(snapshot.val().name);
//   console.log(snapshot.val().destination);
//   console.log(snapshot.val().frequency);
//   console.log(snapshot.val().next);
//   console.log(snapshot.val().minutes);

//   // Change the HTML to reflect
 svName = snapshot.val().name;
  //$("#dest-display").snapshot.val().destination;
  //$("#freq-display").snapshot.val().frequency;
//   $("#next-display").text(snapshot.val().next);
//   $("#minutes-display").text(snapshot.val().minutes);

//   // Handle the errors
// }, function (errorObject) {
 
  var tr = $("<tr>")


  var nameTd = $("<td>");
  nameTd.append(svName);
  tr.append(nameTd);

  // var destinationTd = $("<td>");
  // destinationTd.append(sv.destination);
  // tr.append(destinationTd);

  // var frequenceyTd = $("<td>");
  // frequencyTd.append(sv.frequency);
  // tr.append(frequencyTd);


//   var nextTd = $("<td>");
//   nextTd.append(sv.next);
//   tr.append(nextTd);

//   var minutesTd = $("<td>");
//   minutesTd.append(sv.minutes);
//   tr.append(minutesTd);

//   console.log("Errors handled: " + errorObject.code);

  $("#table1").append(tr);
});