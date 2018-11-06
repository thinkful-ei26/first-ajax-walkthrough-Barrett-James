'use strict';
/*eslint-env jquery*/

// function onYouTubeIframeAPIReady() {
  
// const player = new YT.Player('player', {
    
//     height: '390',
//     width: '640',
//     videoId: store.Videos.id.videoId,
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
  
// });
// }

function onPlayerStateChange(){
  console.log("the player state has changed!");//moral victory if we see this.
}
function onPlayerReady(){
  console.log("the player is ready to play, do stuff");
  //stuff
}

// When DOM is ready:
$(document).ready(function () {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
  thinkfulTube.handleFormSubmit();
  thinkfulTube.render();
  onYouTubeIframeAPIReady();
  
}
);
