'use strict';
const store = (function() {
  let Videos = [];
  const addVideosToStore = function(videos) {
    this.Videos = videos;
  };
  let nextPageToken = '';
  let prevPageToken = '';
  let searched = '';
  return {
    Videos,
    addVideosToStore,
    nextPageToken,
    prevPageToken,
    searched
  };
}());