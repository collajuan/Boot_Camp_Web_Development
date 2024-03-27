const buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var userClickedPattern = [];

//console.log(gamePattern);

var started = false;
var level = 0;

$(document).keypress(function(){
    if(!started){
        $("#leevel-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});



$('.btn').on("click", function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    //console.log(userClickedPattern);

    playSound(userChosenColour);
    animationPress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});



function nextSequence(){

    userClickedPattern = [];
    level++;

    $("#level-title").text("Level " + level);
    
    var randomNumber = Math.floor(Math.random()*4);      
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);  

    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200)
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }

}

function playSound (name){
    var audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();
}

function startOver(){
    started = false;
    level = 0;
    gamePattern = [];
}


function animationPress(currentColour){
    $(`#${currentColour}`).addClass("pressed");
    setTimeout(function() {
        //your code to be executed after 1 second
        $(`#${currentColour}`).removeClass("pressed");
      }, 100);
}