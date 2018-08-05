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
var winDiv = $("<p>Correct Answer: " + correct  + "</p>");

var lossDiv = $("<p>Wrong Answer: " + incorrect  + "</p>");


// $('input[name=name_of_your_radiobutton]:checked').val();

// var scoreCheck = function() {
//     if ($('input[Vader]:checked', '#questions1').val() === true) {
//         correct++;
//         $("#correctAnswer").html(winDiv);
//         // $("#wins").text("Wins:" + wins);
//     }
//     else if ($('input[Vader]:checked', '#questions1').val() === false) {
//         incorrect++;
//         $("#wrongAnswer").html(lossDiv);
//         // $("#losses").text("Losses:" + incorrect);
//     }
// }

var scoreCheck = function() {
    if ($('input:radio[name=q1]')[1].checked === true) {
        correct++;
    }
    else if ($('input:radio[name=q1]')[0].checked === true) {
        incorrect++;
    }
    else if ($('input:radio[name=q1]')[2].checked === true) {
        incorrect++;
    }
    else if ($('input:radio[name=q1]')[3].checked === true) {
        incorrect++;
    }
    else {
        unanswered++;
    }
    $("#correctAnswer").html("<p>Correct Answers: " + correct + "</p>");
    $("#wrongAnswer").html("<p>Wrong Answers: " + incorrect + "</p>");
    $("#noAnswer").html("<p>Unanswered Questions: " + unanswered + "</p>");

};

$(".triviaQuestions").hide();
$("#scoreBox").hide();
$("#timeLeft").hide();


$("#startButton").on("click", function() {
    $("#startRow").empty();
    $(".triviaQuestions").show();
    $("#timeLeft").show();  

var n = 6;
setTimeout(countDown,1000);

function countDown(){
    n--;
    if(n > 0){
        $("#counter").html("<p>Seconds Remaining: " + n + "</p>")
        setTimeout(countDown,1000);
    }
    else if (n === 0) {
        scoreCheck();
        $(".triviaQuestions").hide();
        $("#timeLeft").hide(); 
        $("#scoreBox").show();
        console.log(correct);
        console.log(incorrect);
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