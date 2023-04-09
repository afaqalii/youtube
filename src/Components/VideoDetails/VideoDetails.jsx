import React from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'

const VideoDetails = () => {
   const {id} = useParams()

  return (
    <div className='videoDetailContainer'>
       <div className="videoPlayerContainer">
        <ReactPlayer 
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          width="50%"
          height="100%"
          playing={true}
        />
       </div>
       <div className="relatedVideoContainer"></div>
    </div>
  )
}

export default VideoDetails