(function () {
  "use strict";

  // YOUR CODE HERE

  //displays message for entering and exiting button
  

  //creates stop button/stoplight
  var stopButton = document.querySelector("#stopButton");
  var stopLight = document.querySelector("#stopLight");
 

  //creates slow button/slowlight
  var slowButton = document.querySelector("#slowButton");
  var slowLight = document.querySelector("#slowLight");
 
  //creates go button/go light
  var goButton = document.querySelector("#goButton");
  var goLight = document.querySelector("#goLight");

  //containers 
  let button = document.querySelectorAll('.button');
  let controls = document.querySelector('#controls');

  //changes stop light color 
  stopButton.addEventListener("click", () => {
    stopLight.classList.toggle('stop');
  });

  //changes slow light color
  slowButton.addEventListener("click", () => {
    slowLight.classList.toggle('slow');
  });

  //changes go button color
  goButton.addEventListener("click", function () {
    goLight.classList.toggle('go'); 
  });

  //activate events for each button on mouse enter and mouse exit
  var enterButton = (event) => {
    console.log(`Entered ${event.target.textContent} button`);
  };

  var exitButton = (event) => {
    console.log(`Left ${event.target.textContent} button`);
  };

  for(let i = 0; i < button.length; i++){
  button[i].addEventListener("mouseenter", enterButton);
  button[i].addEventListener("mouseleave", exitButton);
  }

//console logs state of light upon button click 
controls.addEventListener('click', (event) => {

if(event.target.id === 'stopButton' && stopLight.classList.contains('stop')){
  console.log(`${event.target.textContent} is on`);
} else if(event.target.id === 'slowButton' && slowLight.classList.contains('slow')){
  console.log(`${event.target.textContent} is on`);
} else if(event.target.id === 'goButton' && goLight.classList.contains('go')){
  console.log(`${event.target.textContent} is on`);
} else if(event.target.classList.contains('button'))
  { console.log(`${event.target.textContent} is off`); }


})



})();
