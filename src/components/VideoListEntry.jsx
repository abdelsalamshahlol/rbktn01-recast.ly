var VideoListEntry = ({video, handler}) => {

  const handleClick = function () {
    handler(video);
  };

  return (<div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" onClick={handleClick}>{video.snippet.title}</div>
      <div className="video-list-entry-detail">{video.snippet.description}</div>
    </div>
  </div>);
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired,
  // handler: React.PropTypes.object
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
