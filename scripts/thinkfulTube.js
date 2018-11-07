'use strict';
/*eslint-env jquery*/
const thinkfulTube = (function() {

  const fetchVideos = function(searchTerm, callback) {
    const myDataObject = {
      part : 'snippet',
      key : API_KEY,
      q: searchTerm,
      maxResults: 6
    };
    $.getJSON(BASE_URL, myDataObject, callback);
  };

  const fetchNextPage = function(nextPageToken, callback){
    const myDataObject = {
      part : 'snippet',
      key : API_KEY,
      pageToken: nextPageToken,
      maxResults: 6
    };
    $.getJSON(BASE_URL, myDataObject, callback);
  };

  const decorateResponse = function(response) {
    console.log(response);
    store.nextPageToken = response.nextPageToken || '';
    if (store.nextPageToken !== ''){
      $('.Next').removeClass('hidden');
    } else {
      $('.Next').addClass('hidden');
    }
    store.prevPageToken = response.prevPageToken || '';
    if (store.prevPageToken !== ''){
      $('.Previous').removeClass('hidden');
    } else {
      $('.Previous').addClass('hidden');
    }
    const itemsArray = response.items.map(function(item) {
      return {
        link: `https://www.youtube.com/watch?v=${item.id.videoId || item.id.channelId}`,
        id: item.id.videoId || item.id.channelId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url,
        channelId: item.snippet.channelId,
        channelTitle: item.snippet.channelTitle
      };
    });
    store.addVideosToStore(itemsArray);
    thinkfulTube.render();
  };
//<img src="${video.thumbnail}" /> this was in line 56..
  const generateVideoItemHtml = function(video) {
    return `<li class="col-4" data-video-id="${video.id}">
          <div class="player"></div>
          
          <a target="blank" href="${video.link}"><h3>Video Title: ${video.title}</h3></a>
          <a target="blank" href="https://www.youtube.com/channel/${video.channelId}">Channel Title: ${video.channelTitle}</a>
          </li>
          `;
  };

  const render = function() {
    const OurHtml = store.Videos.map(video => generateVideoItemHtml(video));
    OurHtml.join('');
    $('.results').html(OurHtml);
    onYouTubeIframeAPIReady();
  };
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

  const handleFormSubmit = function() {
    $('.searchForm').submit(function(event){
      event.preventDefault();
      const userInput = $('#search-term').val();
      $('#search-term').val('');

      fetchVideos(userInput, thinkfulTube.decorateResponse);
    });
  };
  const handleNextPrev = function(){
    $('.NextPrev').on('click', '.Next', function(event){
      //here the next button has been clicked.
      fetchNextPage(store.nextPageToken, thinkfulTube.decorateResponse);
    });
    $('.NextPrev').on('click', '.Previous', function(event){
      //here the previous button has been clicked.
      fetchNextPage(store.prevPageToken, thinkfulTube.decorateResponse);
    });

};
  return {
    fetchVideos,
    decorateResponse,
    generateVideoItemHtml,
    render,
    BASE_URL,
    handleFormSubmit,
    handleNextPrev,
    fetchNextPage
  };
}());