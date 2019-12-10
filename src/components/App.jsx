import VideoList from './videoList.js';
import VideoPlayer from './videoPlayer.js';
import Search from './search.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVid: exampleVideoData[0],
    };
    this.debouncedFunction = _.debounce(this.fetchData, 500);
  }
  componentDidMount() {
    this.fetchData();
  }

  searcher(event) {
    this.debouncedFunction(event.target.value);
  }

  fetchData(query = 'quantum') {
    this.props.searchYouTube({ key: YOUTUBE_API_KEY, query: query, max: 10 }, (data)=> {
      this.setState({
        videos: data,
        currentVid: data[0]
      });
    });
  }

  updatePlayer(video) {
    this.setState({
      currentVid: video
    });
  }

  render() {
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search searcher={this.searcher.bind(this)} />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVid} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} handler={this.updatePlayer.bind(this)} />
        </div>
      </div>
    </div>);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
console.log(_);