/* eslint-disable strict */
const store = (function() {
  let Videos = [];

  const addVideosToStore = function(videos) {
    this.Videos = videos;
    
  };


  return {
    Videos,
    addVideosToStore,

  };
}());