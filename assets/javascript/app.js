// clicking start button loads questions
// create function clearing start button and adding question with buttons to page
// function will need to start timer
// game should end when timer runs out and clear questions
// game will then display score 
// when timer runs out check buttons with booleans and tally for score

$(document).ready(function() {
    
var newDiv = $("<div>");

$(".triviaQuestions").hide();

    $("#startButton").on("click", function() {
        $("#startRow").empty();
        $(".triviaQuestions").show();  
    });

});