import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import {HiOutlineThumbUp} from "react-icons/hi"
import {FaShare} from "react-icons/fa"
import {FiDownload} from 'react-icons/fi'
import "./styles.scss"
import { fetchDataFromApi } from '../../apis/api'
import PageNotFound from '../pageNotFound/PageNotFound'
const VideoDetails = () => {
   const {videoId} = useParams()
   const [Err, setErr] = useState(false)
   const [videoDetails, setVideoDetails] = useState()
   const [relatedVideos, setRelatedVideos] = useState()
   const [likes, setLikes] = useState()
   useEffect(() => {
       getVideosDetails()
       getRelatedVideos()
       
   },[videoId])
   const getVideosDetails = async () => {
     await fetchDataFromApi(`video/details/?id=${videoId}`)
        .then((res) => {
          setVideoDetails(res)
        })
        .catch((err) => setErr(true))
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
                <img src={video?.thumbnails[1]?.url}  />
              </div>
            </div>
            <div className="relatedVideoRigth">
              <div className="relatedVideoContent">
                <h4>{video?.title}</h4>
                <p>{video?.author?.title}</p>
                <div className="relatedVideoStats">
                  <p>{video?.stats?.views}  Views</p>
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
      {
        Err 
        ? <PageNotFound/>
        : <>
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
        </div>
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
                 <div className="statsBtn likes">
                   <HiOutlineThumbUp className='likeIcon'/>
                 <button>
                   {videoDetails?.stats?.likes}
                 </button>
                 </div>
                 <div className="statsBtn likes">
                   <FaShare className='likeIcon'/>
                 <button>
                   Share
                 </button>
                 </div>
                 <div className="statsBtn likes">
                   <FiDownload className='likeIcon'/>
                 <button>
                   Download
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
        </div></>
      }
    </div>
  )
}

export default VideoDetails