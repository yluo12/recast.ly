import VideoListEntry from './VideoListEntry.js';
// selectVideo
var VideoList = ({videos, selectVideo}) => {
  // <div className="video-list">
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  // </div>

  // console.log(videos);
  // console.log(selectVideo);
  return (<div className="video-list">
    {videos.map((video) => <VideoListEntry video={video} key={video.id.videoId} selectVideo={selectVideo} />)}
  </div>);
};
//, selectVideo

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
