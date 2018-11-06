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


// When DOM is ready:
$(document).ready(function () {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
  thinkfulTube.handleFormSubmit();
  thinkfulTube.render();
  
}
);
