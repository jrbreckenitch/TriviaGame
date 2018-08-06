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


var scoreCheck1 = function() {
    if ($('input:radio[name=q1]')[3].checked === true) {
        correct++;
    }
    else if ($('input:radio[name=q1]')[0].checked === true) {
        incorrect++;
    }
    else if ($('input:radio[name=q1]')[1].checked === true) {
        incorrect++;
    }
    else if ($('input:radio[name=q1]')[2].checked === true) {
        incorrect++;
    }
    else {
        unanswered++;
    }
}

var scoreCheck2 = function() {
    if ($('input:radio[name=q2]')[0].checked === true) {
        correct++;
    }
    else if ($('input:radio[name=q2]')[1].checked === true) {
        incorrect++;
    }
    else if ($('input:radio[name=q2]')[2].checked === true) {
        incorrect++;
    }
    else if ($('input:radio[name=q2]')[3].checked === true) {
        incorrect++;
    }
    else {
        unanswered++;
    }
}

var scoreCheck3 = function() {
    if ($('input:radio[name=q3]')[3].checked === true) {
        correct++;
    }
    else if ($('input:radio[name=q3]')[0].checked === true) {
        incorrect++;
    }
    else if ($('input:radio[name=q3]')[1].checked === true) {
        incorrect++;
    }
    else if ($('input:radio[name=q3]')[2].checked === true) {
        incorrect++;
    }
    else {
        unanswered++;
    }
}

var scoreCheck4 = function() {
    if ($('input:radio[name=q4]')[0].checked === true) {
        correct++;
    }
    else if ($('input:radio[name=q4]')[1].checked === true) {
        incorrect++;
    }
    else if ($('input:radio[name=q4]')[2].checked === true) {
        incorrect++;
    }
    else if ($('input:radio[name=q4]')[3].checked === true) {
        incorrect++;
    }
    else {
        unanswered++;
    }
    // $("#correctAnswer").html("<p>Correct Answers: " + correct + "</p>");
    // $("#wrongAnswer").html("<p>Wrong Answers: " + incorrect + "</p>");
    // $("#noAnswer").html("<p>Unanswered Questions: " + unanswered + "</p>");
};
var scoreCheck5 = function() {
    if ($('input:radio[name=q5]')[1].checked === true) {
        correct++;
    }
    else if ($('input:radio[name=q5]')[0].checked === true) {
        incorrect++;
    }
    else if ($('input:radio[name=q5]')[2].checked === true) {
        incorrect++;
    }
    else if ($('input:radio[name=q5]')[3].checked === true) {
        incorrect++;
    }
    else {
        unanswered++;
    }
}

var scoreCheck6 = function() {
    if ($('input:radio[name=q6]')[3].checked === true) {
        correct++;
    }
    else if ($('input:radio[name=q6]')[0].checked === true) {
        incorrect++;
    }
    else if ($('input:radio[name=q6]')[1].checked === true) {
        incorrect++;
    }
    else if ($('input:radio[name=q6]')[2].checked === true) {
        incorrect++;
    }
    else {
        unanswered++;
    }
}

var scoreCheck7 = function() {
    if ($('input:radio[name=q7]')[0].checked === true) {
        correct++;
    }
    else if ($('input:radio[name=q7]')[1].checked === true) {
        incorrect++;
    }
    else if ($('input:radio[name=q7]')[2].checked === true) {
        incorrect++;
    }
    else if ($('input:radio[name=q7]')[3].checked === true) {
        incorrect++;
    }
    else {
        unanswered++;
    }
}

var scoreCheck8 = function() {
    if ($('input:radio[name=q8]')[2].checked === true) {
        correct++;
    }
    else if ($('input:radio[name=q8]')[0].checked === true) {
        incorrect++;
    }
    else if ($('input:radio[name=q8]')[1].checked === true) {
        incorrect++;
    }
    else if ($('input:radio[name=q8]')[3].checked === true) {
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

var n = 31;
setTimeout(countDown,1000);

function countDown(){
    n--;
    if(n > 0){
        $("#counter").html("<p>Seconds Remaining: " + n + "</p>")
        setTimeout(countDown,1000);
    }
    else if (n === 0) {
        scoreCheck1();
        scoreCheck2();
        scoreCheck3();
        scoreCheck4();
        scoreCheck5();
        scoreCheck6();
        scoreCheck7();
        scoreCheck8();

        $(".triviaQuestions").hide();
        $("#timeLeft").hide(); 
        $("#scoreBox").show();
        console.log(correct);
        console.log(incorrect);
    }
    console.log(n);
}


});

});

