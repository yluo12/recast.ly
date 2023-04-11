import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
};

export default searchYouTube;

// readAll: function(successCB, errorCB = null) {
//   $.ajax({
//     url: Parse.server,
//     type: 'GET',
//     data: { order: '-createdAt' },
//     contentType: 'application/json',
//     success: successCB,
//     error: errorCB || function(error) {
//       console.error('chatterbox: Failed to fetch messages', error);
//     }
//   });
// }