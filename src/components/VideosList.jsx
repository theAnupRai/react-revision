import React from 'react'
import Video from './Video';
// import VideosData from '../data/data';
import PlayButton from './playButton';

const VideosList = ({videos, deleteVideos, dispatch,editVideos}) => {

  return (
      <div className="cover">
        {videos.map((video) => (
          <Video
            key={video.id}
            id={video.id}
            title={video.title}
            view={video.view}
            time={video.time}
            channel={video.channel}
            verified={video.verified}
            // deleteVideos={deleteVideos}
            dispatch={dispatch}
            editVideos={editVideos}
          >
            <div className="app-btn">
              <PlayButton
                onPlay={() => console.log("playing:", video.title)}
                onPause={() => console.log("Pause:", video.title)}
              >
                {video.title}
              </PlayButton>
            </div>
          </Video>
        ))}
      </div>
  )
}

export default VideosList