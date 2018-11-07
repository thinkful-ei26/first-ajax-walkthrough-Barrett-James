'use strict';
/*eslint-env jquery*/

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
    if(store.Videos.length !== 0){
      const myElement = $('div');
      for(let i=0; i < myElement.length; i++){
        player = new YT.Player(myElement[i], {
          height: '200',
          width: '320',
          videoId: store.Videos[i].id,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
    }
}

function onPlayerReady(event) {
    //console.log("Player is ready if you can see this.");
    //event.target.playVideo();//dont autoplay
}
let done = false;
function onPlayerStateChange(event) {
    
}
function stopVideo() {
    player.stopVideo();
}