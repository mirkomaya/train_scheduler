$(document).ready(function () {

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyAwZa3jV0QNXhQXkLTRVTs_3FofVqoD3ak",
        authDomain: "train-scheduler-c46f4.firebaseapp.com",
        databaseURL: "https://train-scheduler-c46f4.firebaseio.com",
        projectId: "train-scheduler-c46f4",
        storageBucket: "",
        messagingSenderId: "191757110856",
        appId: "1:191757110856:web:08409de0bdb06ad5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

    // var train = "";
    // var destination = "";
    // var time = 0;
    // var frequency = 0;

    $(".submit").on("click", function(event) {

        event.preventDefault();

        var train = $(".train-name").val().trim();
        var destination = $(".destination").val().trim();
        var time = $(".train-time").val().trim();
        var frequency = $(".frequency").val().trim();

        database.ref().push( {
            train: train,
            destination: destination,
            time: time,
            frequency: frequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

    })

    database.ref().on("child_added", function(snapshot) {

        var sv = snapshot.val();
        
        // console.log (sv.train);
        // console.log (sv.destination);
        // console.log (sv.time);
        // console.log (sv.frequency);

        var trainTime = sv.time;
        console.log(trainTime);

        // var currentTime = moment();
        // console.log(moment(currentTime).format("HH:mm"));

        // var timeConvert = moment(trainTime).subtract(1, "years");
        // console.log(timeConvert); 

        



        // var tRow = $("<tr>");

        // var trainTd = $("<td>").text(sv.train);
        // var destinationTd = $("<td>").text(sv.destination);
        // var frequencyTd = $("<td>").text(sv.frequency);
        // var timeTd = $("<td>").text(sv.time);
        // var nextArrival = $("<td>").text("#");
        // var minutesAway = $("<td>").text("#");


        // tRow.append(trainTd, destinationTd, frequencyTd, nextArrival, minutesAway);

        // $("tbody").append(tRow);





        
    })












})