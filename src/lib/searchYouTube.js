var searchYouTube = (options, callback) => {
  $.ajax({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      videoEmbeddable: true,
      type: 'video'
    },
    success: (data)=> {
      // console.log('data from API ' + JSON.stringify(data));
      callback(data.items);
    },
    error: (e)=> {
      console.error(e);
    }
  });
};

export default searchYouTube;
