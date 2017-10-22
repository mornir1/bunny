import main from './sass/main.scss';
// var $ = require("jquery");
// import $ from "jquery";

// import explode from "jquery-image-explode"

const bunnies = $('.bunny');
const overlayBoxX = document.querySelector('.overlayBoxX');
const overlayButton = document.querySelector('.overlayButton');

let lastBunny;
let timeUp = false;
let score = 0;
let countdown;


$( ".scoreBoard" ).on( "transitionend", removeTransition);

function timer(seconds){
  const $timerSec = document.querySelector('.timerSec');
  $timerSec.textContent = seconds;  
  const now = Date.now();
    const finishTime = now + seconds*1000; 
  countdown = setInterval( ()=> {
                let secondsLeft = Math.round((finishTime - Date.now())/1000);
        if (secondsLeft === 0){
            timeUp = true;
        }
                if (secondsLeft < 0){
                    clearInterval(countdown);
                    return;
                }
                else {
          $timerSec.textContent = secondsLeft;
                }
            },1000);


}

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomBunny(bunnies) {
    const idx = Math.floor(Math.random() * bunnies.length);
    const bunny = bunnies[idx];
    if (bunny === lastBunny) {
      return randomBunny(bunnies);
    }
    lastBunny = bunny;
    return bunny;
}

  function getUserLevel(){
    var level = document.getElementById("selectInfo").value;
    return level;
  }

  function peep() {
    var level = getUserLevel();
    let time;
    switch (level) {
      case 'a beginner':
        time = randomTime(1000, 2000);
        break;
      case 'an expert':
         time = randomTime(500, 1000);
        break;
      case 'superman!':
         time = randomTime(100, 200);
        break;
    } 
    
    const bunny = randomBunny(bunnies);
    bunny.classList.add('up'); 
    setTimeout(() => {
      bunny.classList.remove('up');
      if (!timeUp) peep();
      else {
        stopGame();
      }

      }, time);

    if (timeUp) {
      stopGame();
      return;
    }
  }

  function stopGame(){
    timeUp = true;
    clearInterval(countdown);
    ShowEndScore();
    $('.OverlayGameOver').css("visibility","visible");
    $('.OverlayGameOver').css("opacity","100");
    overlayBoxX.addEventListener("click",closeOverlyWindow);
    overlayButton.addEventListener("click",startGame);

   $('.start-button').click(startGame);
  }

 function startGame() {
    const gameTime = 10;
    $( ".scoreBoard" ).textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    timer(gameTime);
    
    $('.start-button').unbind( "click" );
    $('.OverlayGameOver').css("visibility","hidden");
    $('.OverlayGameOver').css("opacity","0");
   
  }

  function closeOverlyWindow(){
   $('.start-button').click(startGame);
   $('.OverlayGameOver').css("visibility","hidden");
    $('.OverlayGameOver').css("opacity","0");
   
  }

  function ShowEndScore(){
    let scoreSpan = document.querySelector(".showEndScore");
    scoreSpan.textContent = 'your score is: ' + score;
  }

  function bonk(e) {
    $( ".scoreBoard" ).addClass('playing');
    score++;
    $("audio")[0].play();
    $(this).removeClass('up');
  // $(e.target).fadeOut( "slow" );
    
    // console.log($(this));
// $(this).innerHTML.explode({"minWidth":3,"maxWidth":12,"radius":235,"minRadius":15,"release":false,"fadeTime":300,"recycle":false,"recycleDelay":500,"explodeTime":231,"round":false,"minAngle":0,"maxAngle":360,"gravity":10,"groundDistance":236});
    
    
    
    $( ".scoreBoard" ).text(score);
  }

  function removeTransition() {
     $( ".scoreBoard" ).removeClass('playing');
  }

  $('.bunny').click(bonk);
   $('.start-button').click(startGame);
  
  $('.stop-button').click(stopGame);

function handler( event ) {
  var target = $( event.target );
  // target.explode({"minWidth":3,"maxWidth":12,"radius":235,"minRadius":15,"release":false,"fadeTime":300,"recycle":false,"recycleDelay":500,"explodeTime":231,"round":false,"minAngle":0,"maxAngle":360,"gravity":10,"groundDistance":236});
//  target.explode({"minWidth":3,"maxWidth":12,"radius":235,"minRadius":15,"release":false,"fadeTime":300,"recycle":false,"recycleDelay":500,"explodeTime":69,"round":false,"minAngle":0,"maxAngle":360,"gravity":4,"groundDistance":0});
//  target.explode({"minWidth":3,"maxWidth":12,"radius":178,"minRadius":15,"release":false,"fadeTime":300,"recycle":false,"recycleDelay":500,"explodeTime":125,"round":false,"minAngle":0,"maxAngle":360,"gravity":10,"groundDistance":0});
  target.explode({"minWidth":3,"maxWidth":7,"radius":178,"minRadius":15,"release":false,"fadeTime":300,"recycle":false,"recycleDelay":500,"explodeTime":125,"round":false,"minAngle":0,"maxAngle":360,"gravity":10,"groundDistance":0});
  $("explode-wrapper").fadeOut(200);
  setTimeout (function() {
    target.explodeRestore();
  } , 300);
}


$( '.explodeImage' ).click( handler ).find( '.explodeImage' ).hide();


// $( '.explodeImage' ).click(function( event ) {
//   console.log($('event.target'));
//   // console.log( $('this'));
  
//   $('event.target').explode({"minWidth":3,"maxWidth":12,"radius":235,"minRadius":15,"release":false,"fadeTime":300,"recycle":false,"recycleDelay":500,"explodeTime":231,"round":false,"minAngle":0,"maxAngle":360,"gravity":10,"groundDistance":236});
//   // $( "#log" ).html( "clicked: " + event.target.nodeName );
// });


// $('.explodeImage').click(explodeImage);

//   function explodeImage(e){
//     console.log($('e.target'));
//  $('e.target').explode({"minWidth":3,"maxWidth":12,"radius":235,"minRadius":15,"release":false,"fadeTime":300,"recycle":false,"recycleDelay":500,"explodeTime":231,"round":false,"minAngle":0,"maxAngle":360,"gravity":10,"groundDistance":236});
   
//   }


// $("#target").explode({"minWidth":3,"maxWidth":12,"radius":235,"minRadius":15,"release":false,"fadeTime":300,"recycle":false,"recycleDelay":500,"explodeTime":231,"round":false,"minAngle":0,"maxAngle":360,"gravity":10,"groundDistance":236});
