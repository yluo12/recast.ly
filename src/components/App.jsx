import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../src/lib/searchYouTube.js';

const {useState} = React;
const {useEffect} = React;
// {searchYouTube}
var App = ({searchYouTube}) => {

  // var live = searchYouTube('cat');
  console.log(searchYouTube);

  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  var selectVideo = function (videoTitle) {
    videos.forEach((video) => {
      if (video.snippet.title === videoTitle) {
        setCurrentVideo(video);
      }
    });
  };

  // useEffect(()=> {
  //   setVideos(searchYouTube('cat'));
  // });

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>

      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayer</em>
            <VideoPlayer video={currentVideo}/>
          </h5></div>
        </div>
        <VideoList videos={videos} selectVideo={selectVideo}/>
      </div>
    </div>
  );
};
//

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;





