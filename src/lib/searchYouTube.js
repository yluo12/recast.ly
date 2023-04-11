import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';
// import App from './components/App.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

// var renderData = function (data) {
//   console.log(data);
//   return data;
// };


var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {
      youtube_api_key: YOUTUBE_API_KEY,
      q: query
    },
    contentType: 'application/json',
    success: function (data) {
      console.log(data);
      return data;
    },
    error: function(error) {
      console.error('Recast.ly: Failed to fetch messages', error);
    }
  });
};
// searchYouTube('cat');
export default searchYouTube;