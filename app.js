
  // START CODING BELOW!!

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA5eYKsB8T2q6rMGdKSvac6eQsWTzsZEjE",
    authDomain: "fir-recent-user.firebaseapp.com",
    databaseURL: "https://fir-recent-user.firebaseio.com",
    storageBucket: "fir-recent-user.appspot.com"
  };

  firebase.initializeApp(config);

  // Create a variable to reference the database
  var database = firebase.database();

   // Initial Values
   var name = "";
   var destination = "";
   var frequency = "";
   var next = "";
   var minutes = "";

   // Capture Button Click
   $("#add-user").on("click", function() {
     // Don't refresh the page!
     event.preventDefault();

     // YOUR TASK!!!
     // Code in the logic for storing and retrieving the most recent user.
     // Don't forget to provide initial data to your Firebase database.
     name = $("#name-input").val().trim();
     destination = $("#dest-input").val().trim();
     frequency = $("#freq-inpust").val().trim();
     next = $("#next-input").val().trim();
     minutes = $("#minutes-input").val().trim();

     database.ref().set({
       name: name,
       destination: destination,
       frequency: frequency,
       next: next,
       minutes: minutes,
     });

   });

   // Firebase watcher + initial loader HINT: .on("value")
   database.ref().on("value", function(snapshot) {

     // Log everything that's coming out of snapshot
     console.log(snapshot.val());
     console.log(snapshot.val().name);
     console.log(snapshot.val().destination);
     console.log(snapshot.val().frequency);
     console.log(snapshot.val().next);
     console.log(snapshot.val().minutes);

     // Change the HTML to reflect
     $("#name-display").text(snapshot.val().name);
     $("#dest-display").text(snapshot.val().destination);
     $("#freq-display").text(snapshot.val().frequency);
     $("#next-display").text(snapshot.val().next);
     $("#minutes-display").text(snapshot.val().minutes);

     // Handle the errors
   }, function(errorObject) {
     console.log("Errors handled: " + errorObject.code);
   
   var tr = $("<tr>")
    
   var employeeTd = $("<td>");
   employeeTd.append(sv.employee);
   tr.append(employeeTd);

   var roleTd = $("<td>");
   roleTd.append(sv.role);
   tr.append(roleTd);

   var dateTd = $("<td>");
   dateTd.append(sv.date);
   tr.append(dateTd);


   var monthlyTd = $("<td>");
   monthlyTd.append(sv.monthly);
   tr.append(monthlyTd);
   
   var workedTd = $("<td>");
   workedTd.append(sv.worked);
   tr.append(workedTd);

   var billedTd = $("<td>");
   billedTd.append(sv.billed);
   tr.append(billedTd);
   
   $("#table1").append(tr);
   });