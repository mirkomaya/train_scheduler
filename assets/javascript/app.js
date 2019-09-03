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


    $(".submit").on("click", function (event) {

        event.preventDefault();

        var train = $(".train-name").val().trim();
        var destination = $(".destination").val().trim();
        var time = $(".train-time").val().trim();
        var frequency = $(".frequency").val().trim();

        database.ref().push({
            train: train,
            destination: destination,
            time: time,
            frequency: frequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

        $(".train-name").val("");
        $(".destination").val("");
        $(".train-time").val("");
        $(".frequency").val("");

    })

    database.ref().on("child_added", function (childSnapshot) {

        var trainName = childSnapshot.val().train;
        var trainDest = childSnapshot.val().destination;
        var trainTime = childSnapshot.val().time;
        var trainFreq = childSnapshot.val().frequency;

        console.log(trainName);
        console.log(trainDest);
        console.log(trainTime);
        console.log(trainFreq);

        var firstTimeConverted = moment(trainTime, "HH:mm").subtract(1, "years");

        var currentTime = moment();
        console.log(moment(currentTime).format("HH:mm"));

        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        console.log(diffTime);

        var tRemainder = diffTime % trainFreq;
        console.log(tRemainder);

        var tMinutesTillTrain = trainFreq - tRemainder;
        console.log(tMinutesTillTrain);

        var nextTrain = moment().add(tMinutesTillTrain, "minutes");
        console.log(moment(nextTrain).format("HH:mm"));

        var tRow = $("<tr>").append(
            $("<td>").text(trainName),
            $("<td>").text(trainDest),
            $("<td>").text(trainFreq),
            $("<td>").text(moment(nextTrain).format("HH:mm A")),
            $("<td>").text(tMinutesTillTrain),
        );

        $("tbody").append(tRow);

    })


})



