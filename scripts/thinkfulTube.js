'use strict';
/*eslint-env jquery*/
const thinkfulTube = (function() {

  const fetchVideos = function(searchTerm, callback) {
    const myDataObject = {
      part : 'snippet',
      key : API_KEY,
      q: searchTerm
    };
    $.getJSON(BASE_URL, myDataObject, callback);
  };

  const decorateResponse = function(response) {
    const itemsArray = response.items.map(function(item) {
      console.log(item);
      return {
        link: `https://www.youtube.com/watch?v=${item.id.videoId || item.id.channelId}`,
        id: item.id.videoId || item.id.channelId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url
      };
    });
    store.addVideosToStore(itemsArray);
    thinkfulTube.render();
  };
//<img src="${video.thumbnail}" />
  const generateVideoItemHtml = function(video) {
    return `<li data-video-id="${video.id}">
          <img src="${video.thumbnail}" />
          <a target="blank" href="${video.link}"><h3>${video.title}</h3></a>
          </li>`;
  };

  const render = function() {
    const OurHtml = store.Videos.map(video => generateVideoItemHtml(video));
    OurHtml.join('');
    $('.results').html(OurHtml);
  };
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

  const handleFormSubmit = function() {
    $('form').submit(function(event){
      event.preventDefault();
      //console.log("Form is submitted");works
      const userInput = $('#search-term').val();
      $('#search-term').val('');
      fetchVideos(userInput, thinkfulTube.decorateResponse);
    });
  };
      
  return {
    fetchVideos,
    decorateResponse,
    generateVideoItemHtml,
    render,
    BASE_URL,
    handleFormSubmit
  };

}());