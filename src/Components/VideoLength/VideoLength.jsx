import moment from 'moment/moment'
import React from 'react'
import "../VideoCard/styles.scss"

const VideoLength = ({time}) => {
  
    const videoLengthInSeconds = moment()
          ?.startOf("day")
          ?.seconds(time)
          ?.format("H:mm:ss")
  
    return (
    <div className='videoTime'>
        {videoLengthInSeconds}
    </div>
  )
}

export default VideoLength