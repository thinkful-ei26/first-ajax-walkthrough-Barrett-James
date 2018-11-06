'use strict';
/*eslint-env jquery*/

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

const handleFormSubmit = function() {
  $('form').submit(function(event){
    event.preventDefault();
    //console.log("Form is submitted");works
    const userInput = $('#search-term').val();
    $('#search-term').val('');
    thinkfulTube.fetchVideos(userInput, thinkfulTube.decorateResponse);
  });
};

// When DOM is ready:
$(function () {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
  handleFormSubmit();
});
