import React, { useEffect, useState } from 'react'
// import axios  from 'axios'
import "./styles.scss"
import  {fetchDataFromApi} from "../../../apis/api"
import VideoCard from '../../../Components/VideoCard/VideoCard'
import { useSelector } from 'react-redux'
import Loader from '../../../Components/loader/loader'
import PageNotFound from '../../../Components/pageNotFound/PageNotFound'
const FeedSection = () => {
  const [feed, setFeed] = useState()
  const [Err, setErr] = useState(false)
  const [loading, setLoading] = useState(true)
  const {category} = useSelector((state) => state.home)
  useEffect(() => {
    fetchDataFromApi(`search/?q=${category}`)
      .then((res) => {
        setFeed(res)
        setLoading(false)
      })
      .catch((err) => setErr(true))
  },[category])
  const RenderFeed = feed?.contents?.map((video, index) => {
    return (
      <VideoCard video={video?.video} key={index}/>
    )
  })

  return (
    <div className='feedSectionContainer'>
      {
        Err 
        ? <PageNotFound/>
        : <> {loading 
          ? <span className='loaderr'><Loader/></span> :
     <div className='feedSection'>
        <div className="wrapper">
          <div className="container">
           {RenderFeed}
          </div>
         </div>
      </div>
          }</>
      }
    </div>
  )
}

export default FeedSection