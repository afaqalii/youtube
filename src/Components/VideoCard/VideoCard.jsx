import React from 'react'
import "./styles.scss"

const VideoCard = ({video:{video}}) => {
  const {title, videoId, thumbnails,stats, publishedTimeText, author} = video;
    const videoThumbnail = thumbnails[1]?.url
    const channelLogo = author.avatar[0]?.url
  return (
    <div className='videoCard'>
      <div className="videoImg">
        <img src={videoThumbnail} alt={title} />
      </div>
      <div className="videoContent">
        <div className="channelLogo">
          <img src={channelLogo} alt="Channel Logo" />
        </div>
        <div className="videoContentText">
          <h3>{title}</h3>
          <p>{author.title}</p>
          <div className="videoInfo">
            <p>{stats.views}</p>
            <p>{publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard