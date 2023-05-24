import React, { useEffect, useState } from 'react'
import  "./styles.scss"
import { Link, useParams } from 'react-router-dom'
import Loader from '../../Components/loader/loader'
import SideBar from '../home/sidebar/SideBar'
import { fetchDataFromApi } from '../../apis/api'
import PageNotFound from '../../Components/pageNotFound/PageNotFound'
import VideoLength from '../../Components/VideoLength/VideoLength'
import { abbreviateNumber } from 'js-abbreviation-number'
const SearchResults = () => {
  const {query} = useParams()
  const [searchResults, setSearchResults] = useState()
  const [Err, setErr] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchSearchResults()
  },[query])

  const fetchSearchResults = () => {
    fetchDataFromApi(`search/?q=${query}`)
    .then((res) =>  {
      setSearchResults(res)
      setLoading(false)
    })
    .catch((err) => {
      setErr(true)
    })
  }
  
  return (
    <div className='searchPage'>
    {
      window.innerWidth > 768 
      ? <SideBar/>
      : <></>
    }
    <div style={{alignItems:`${loading ? 'center': 'normal'}`}} className='searchResultsContainer'>
      {
        Err 
        ? <PageNotFound/>
        : <>{loading 
          ? <><Loader/></> :
          <div className="searchResults">
          {searchResults && 
            searchResults?.contents?.map((videoContent) => {
               const {video} = videoContent
               const thumbnail = video?.thumbnails[0]?.url
              return (
            <Link to={`/watch/${video?.videoId}`}>
               <div className="video">
                 <div className="video-left">
                  <img src={thumbnail} alt='video thumbnail' />
                   <VideoLength time={video?.lengthSeconds} />
               </div>
               <div className="video-rigth">
                   <h3>{video?.title}</h3>
                   <div className="video-title-views">
                 <p>{`${abbreviateNumber(video?.stats?.views, 2)} Views`}</p>
                   {/* video?.stats?.views */}
                   <p>{video?.publishedTimeText}</p>
                   </div>
                   <div className="channel-info">
                   <img src={video?.author?.avatar[0]?.url} alt="channel logo" />
                   <p>{video?.author?.title}</p>
                   </div>
                   <p className='video-desc'>{video?.title}</p>
               </div>
            </div>
            </Link>
              )
          })}
        </div>}</>
      }
    </div>
    </div>
  )
}

export default SearchResults