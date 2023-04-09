import React, { useEffect, useState } from 'react'
import "./styles.scss"
import { fetchDataFromApi } from '../../../apis/api'
import VideoCard from '../../../Components/VideoCard/VideoCard'
const FeedSection = () => {
  const [feed, setFeed] = useState()
  useEffect(() => {
    fetchDataFromApi(`search/?q=gaming`)
      .then((res) => { 
       setFeed(res.contents)
      })
      .catch((err) => console.log(err))
  },[])
  
  const RenderedFeed = feed?.map((video) => {
    return (
      <VideoCard video={video}/>
    )
  })

  return (
    <div className='feedSection'>
      <div className="container">
        {RenderedFeed}
      </div>
    </div>
  )
}

export default FeedSection