// clicking start button loads questions
// create function clearing start button and adding question with buttons to page
// function will need to start timer
// game should end when timer runs out and clear questions
// game will then display score 
// when timer runs out check buttons with booleans and tally for score

$(document).ready(function() {

var correct = 0;

var incorrect = 0;

var unanswered = 0;

var timeDiv = $("<p>'Time Remaining: '</p>");

$(".triviaQuestions").hide();
$("#scoreBox").hide();
$("#timeLeft").hide();


$("#startButton").on("click", function() {
    $("#startRow").empty();
    $(".triviaQuestions").show();
    $("#timeLeft").show();  

var n = 10;
setTimeout(countDown,1000);

function countDown(){
    n--;
    if(n > 0){
        $("#counter").html("<p>Seconds Remaining: </p>" + n )
        setTimeout(countDown,1000);
    }
    else if (n === 0) {
        $(".triviaQuestions").hide();
        $("#timeLeft").hide(); 
        $("#scoreBox").show();
    }
    console.log(n);
}

// var interval = setInterval(function()
// {
//     document.getElementById("cco").innerHTML = -- cc;

//     if (cc == 0)
//         clearInterval(interval);

// }, 1000);

    // setTimeout(secondCount, 1000);

    // function secondCount() {

    //     for (i = 120; i > 0; i--) {
    //         $("#timeLeft").html("<p>Time Remaining: </p>" + i);
    //     }

    //     // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
    //     // console log 10 seconds left
    //     $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
    //     console.log("10 seconds left");
    // }
});

});