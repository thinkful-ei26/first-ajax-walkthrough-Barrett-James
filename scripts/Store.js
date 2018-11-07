'use strict';
const store = (function() {
  let Videos = [];
  const addVideosToStore = function(videos) {
    this.Videos = videos;
  };
  let nextPageToken = '';
  let prevPageToken = '';
  return {
    Videos,
    addVideosToStore,
    nextPageToken,
    prevPageToken
  };
}());