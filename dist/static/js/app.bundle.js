!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e){var t=document.querySelector(".timerSec");t.textContent=e;var n=Date.now(),r=n+1e3*e;k=setInterval(function(){var e=Math.round((r-Date.now())/1e3);if(0===e&&(h=!0),e<0)return void clearInterval(k);t.textContent=e},1e3)}function o(e,t){return Math.round(Math.random()*(t-e)+e)}function a(e){var t=Math.floor(Math.random()*e.length),n=e[t];return n===O?a(e):(O=n,n)}function i(){return document.getElementById("selectInfo").value}function c(){var e=i(),t=void 0;switch(e){case"a beginner":t=o(1e3,2e3);break;case"an expert":t=o(500,1e3);break;case"superman!":t=o(100,200)}var n=a(p);if(n.classList.add("up"),setTimeout(function(){n.classList.remove("up"),h?u():c()},t),h)return void u()}function u(){h=!0,clearInterval(k),d(),$(".OverlayGameOver").css("visibility","visible"),$(".OverlayGameOver").css("opacity","100"),x.addEventListener("click",l),b.addEventListener("click",s),$(".start-button").click(s)}function s(){$(".scoreBoard").textContent=0,h=!1,g=0,c(),r(10),$(".start-button").unbind("click"),$(".OverlayGameOver").css("visibility","hidden"),$(".OverlayGameOver").css("opacity","0")}function l(){$(".start-button").click(s),$(".OverlayGameOver").css("visibility","hidden"),$(".OverlayGameOver").css("opacity","0")}function d(){document.querySelector(".showEndScore").textContent="your score is: "+g}function v(e){$(".scoreBoard").addClass("playing"),g++,$("audio")[0].play(),$(this).removeClass("up"),$(".scoreBoard").text(g)}function f(){$(".scoreBoard").removeClass("playing")}function m(e){var t=$(e.target);t.explode({minWidth:3,maxWidth:7,radius:178,minRadius:15,release:!1,fadeTime:300,recycle:!1,recycleDelay:500,explodeTime:125,round:!1,minAngle:0,maxAngle:360,gravity:10,groundDistance:0}),$("explode-wrapper").fadeOut(200),setTimeout(function(){t.explodeRestore()},300)}var y=n(1),p=(function(e){e&&e.__esModule}(y),$(".bunny")),x=document.querySelector(".overlayBoxX"),b=document.querySelector(".overlayButton"),O=void 0,h=!1,g=0,k=void 0;$(".scoreBoard").on("transitionend",f),$(".bunny").click(v),$(".start-button").click(s),$(".stop-button").click(u),$(".explodeImage").click(m).find(".explodeImage").hide()},function(e,t){}]);
//# sourceMappingURL=app.bundle.js.map