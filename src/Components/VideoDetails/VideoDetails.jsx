import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import "./styles.scss"
import { fetchDataFromApi } from '../../apis/api'
const VideoDetails = () => {
   const {videoId} = useParams()
   const [videoDetails, setVideoDetails] = useState()
   const [relatedVideos, setRelatedVideos] = useState()
   useEffect(() => {
       getVideosDetails()
       getRelatedVideos()
       
   },[])
   const getVideosDetails = async () => {
     await fetchDataFromApi(`video/details/?id=${videoId}`)
        .then((res) => {
          setVideoDetails(res)
        })
   }
   const getRelatedVideos = () => {
       fetchDataFromApi(`video/related-contents/?id=${videoId}`)
         .then((res) => {
          setRelatedVideos(res.contents)
        })
   }

   const RelatedVideos =  
       relatedVideos?.map(({video}, index) => {
        
        return (
          <Link to={`/watch/${video?.videoId}`}>
          <div className="relatedVideo">
            <div className="relatedVideoLeft">
              <div className="relatedVideoImg">
                <img src={video?.thumbnails[0]?.url}  />
              </div>
            </div>
            <div className="relatedVideoRigth">
              <div className="relatedVideoContent">
                <h4>{video?.title}</h4>
                <p>{video?.author?.title}</p>
                <div className="relatedVideoStats">
                  <p>{video?.stats?.views} Views</p>
                  <p>{video?.publishedTimeText}</p>
                </div>
              </div>
            </div>
          </div>
          </Link>
        )
       } )


  return (
    <div className='videoDetailContainer'>
      <div className="videoDetailWrapper">
       <div className="videoPlayerLeft">
        <div className="videoPlayerContainer">
        <ReactPlayer 
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
          playing={true}
        />
        <div className="videoDetailContent">
          <h2>{videoDetails?.title}</h2>
          <div className="videoDetailInfo">
            <div className="videoDetailChannelInfo">
              <div className="avatarImg">
                <img src={videoDetails?.author?.avatar[0]?.url} alt="" />
              </div>
              <div className="channelInfoContent">
                <h4>{ videoDetails?.author?.title}</h4>
                <p>{videoDetails?.author?.stats?.subscribersText}</p>
              </div>
            </div>
              <div className="videoDetailStats">
                <button>
                  {videoDetails?.stats?.likes}
                </button>
                <button>
                </button>
              </div>
          </div>
        </div>
       </div>
       </div>
       <div className="videoPlayerRigth">
       <div className="relatedVideoContainer">
        {RelatedVideos}
       </div>
       </div>
       </div>
    </div>
  )
}

export default VideoDetails