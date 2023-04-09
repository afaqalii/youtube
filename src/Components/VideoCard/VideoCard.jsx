import React from 'react'
import "./styles.scss"
import { abbreviateNumber } from 'js-abbreviation-number';
import VideoLength from '../VideoLength/VideoLength';
import { Link } from 'react-router-dom';

const VideoCard = ({video:{video}}) => {
  const {title, videoId, thumbnails,stats, publishedTimeText, author,lengthSeconds} = video;
    const videoThumbnail = thumbnails[1]?.url
    const channelLogo = author.avatar[0]?.url
  return (  
    <Link to={`watch/${videoId}`}><div className='videoCard'>
      <div className="videoImg">
        <img src={videoThumbnail} alt={title} />
        <VideoLength  time={lengthSeconds} />
      </div>
      <div className="videoContent">
        <div className="channelLogo">
          <img src={channelLogo} alt="Channel Logo" />
        </div>
        <div className="videoContentText">
          <h3>{title}</h3>
          <p>{author.title}</p>
          <div className="videoInfo">
            <p>{`${abbreviateNumber(stats.views, 2)} Views`}</p>
            <p>{publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default VideoCard