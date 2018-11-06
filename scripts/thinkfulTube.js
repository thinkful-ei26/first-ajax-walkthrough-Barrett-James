'use strict';
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
      return {
            
        id: item.id.videoId || item.id.channelId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url
      };
    });
      
    store.addVideosToStore(itemsArray);
    render();
  };

  const generateVideoItemHtml = function(video) {
    return `
          <li data-video-id="${video.id}">
          <img src="${video.thumbnail}" />
          <h3>${video.title}</h3>
          </li>`;
  };

  const render = function() {
    const html = store.Videos.map(video => generateVideoItemHtml(video));
    html.join('');
    $('.results').html(html);
  };
      
  return {
    fetchVideos,
    decorateResponse,
    generateVideoItemHtml,
    render
  };

}());