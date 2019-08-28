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

        var trainName = $(".train-name").val().trim();

        console.log(trainName);




    })












})