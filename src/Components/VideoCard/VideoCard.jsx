import React from 'react'
import "./styles.scss"
import { abbreviateNumber } from 'js-abbreviation-number';
import VideoLength from '../VideoLength/VideoLength';
import { Link } from 'react-router-dom';

const VideoCard = ({video}) => {
    const videoThumbnail = video?.thumbnails[0]?.url
    const channelLogo = video?.author?.avatar[0]?.url
        
  return (  
    <Link to={`/watch/${video?.videoId}`}><div className='videoCard'>
      <div className="videoImg">
        <img src={video && videoThumbnail} alt={video?.title} />
        <VideoLength  time={video?.lengthSeconds} />
      </div>
      <div className="videoContent">
        <div className="channelLogo">
          <img src={video && channelLogo} alt="Channel Logo" />
        </div>
        <div className="videoContentText">
          <h3>{video?.title}</h3>
          {/* <p>{video?.title}</p> */}
          <div className="videoInfo">
            <p>{`${abbreviateNumber(video?.stats?.views, 2)} Views`}</p>
            <p>{video?.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default VideoCard