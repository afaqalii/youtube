import React, { useEffect, useState } from 'react'
// import axios  from 'axios'
import "./styles.scss"
import  {fetchDataFromApi} from "../../../apis/api"
import VideoCard from '../../../Components/VideoCard/VideoCard'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../Components/loader/loader'
import PageNotFound from '../../../Components/pageNotFound/PageNotFound'
import { activeItemClick } from '../../../store/homeSlice'
const FeedSection = () => {
  const [feed, setFeed] = useState()
  const [Err, setErr] = useState(false)
  const [loading, setLoading] = useState(true)
  const {category, sidebarItemClicked} = useSelector((state) => state.home)
  const dispatch = useDispatch()
  useEffect(() => {
    fetchDataFromApi(`search/?q=${category}`)
      .then((res) => {
        setFeed(res)
        setLoading(false)
        dispatch(activeItemClick())
      })
      .catch((err) => setErr(true))
  },[category])
  console.log(sidebarItemClicked)
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
        : <> {loading || sidebarItemClicked
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