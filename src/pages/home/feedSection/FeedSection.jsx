import React, { useEffect, useState } from 'react'
import "./styles.scss"
import { fetchDataFromApi } from '../../../apis/api'
import VideoCard from '../../../Components/VideoCard/VideoCard'
import { useSelector } from 'react-redux'
const FeedSection = () => {
  const [feed, setFeed] = useState()
  const {category} = useSelector((state) => state.home)
  useEffect(() => {
    fetchDataFromApi(`search/?q=${category}`)
      .then((res) => { 
       setFeed(res.contents)
      })
      .catch((err) => console.log(err))
  },[category])
  
  const RenderedFeed = feed?.map((video, index) => {
    return (
      <VideoCard video={video} key={index}/>
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