import moment from 'moment/moment'
import React from 'react'
import "../VideoCard/styles.scss"

const VideoLength = ({time}) => {
    
    const sec = parseInt(time, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    
    return (
    <div className='videoTime'>
      <p>{hours+':'+minutes+':'+seconds}</p>        
    </div>
  )
}

export default VideoLength