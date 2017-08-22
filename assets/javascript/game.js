
$(document).ready(function() {


    var randomNumber = Math.floor(Math.random() * 101 + 19);
        $("#randomNumber").text(randomNumber);


    var totalScore = 0;
        $("#totalScore").text(totalScore);

    var wins = 0;
        $("#wins").text(wins);

    var losses = 0;
        $("#loss").text(losses);


    // define a reset function that will reset the game if conditions are met
    var reset = function(){
        if (totalScore === randomNumber) {
            totalScore = 0;
            wins = wins + 1;
            alert("You won. Play again?");
        } else if (totalScore > randomNumber) {
            totalScore = 0;
            losses = losses + 1;
            alert("Ah, shucks, you lost. Try again?");
        } 
        // new random and new crystals
        randomNumber = Math.floor(Math.random() * 101 + 19);
        bluePoints = Math.floor((Math.random() * 11)+ 1);
        redPoints = Math.floor((Math.random() * 11) + 1);
        greenPoints = Math.floor((Math.random() * 11 )+ 1);
        // display all the changes
        $("#randomNumber").text(randomNumber);
        $("#wins").text(wins);
        $("#loss").text(losses);
        $("#totalScore").text(totalScore);
    }

   
    
    var bluePoints = Math.floor((Math.random() * 11)+ 1);
    var redPoints = Math.floor((Math.random() * 11) + 1);
    var greenPoints = Math.floor((Math.random() * 11 )+ 1);

    

    // BLUE CRYSTAL ==========================
    $("#blueCrystal").click(function(){
        totalScore = totalScore + bluePoints;
        $("#totalScore").text(totalScore);
        if (totalScore >= randomNumber) {
            reset();
        }
    });

    // RED CRYSTAL ==========================
    $("#redCrystal").click(function(){
        totalScore = totalScore + redPoints;
        $("#totalScore").text(totalScore);
        if (totalScore >= randomNumber) {
            reset();
        }
    });

    // GREEN CRYSTAL ==========================
    $("#greenCrystal").click(function(){
        totalScore = totalScore + greenPoints;
        $("#totalScore").text(totalScore);
        if (totalScore >= randomNumber) {
            reset();
        }
    });

});
 

