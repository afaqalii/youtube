import React from 'react'
import SideBar from './sidebar/SideBar'
import FeedSection from './feedSection/FeedSection'
import "./styles.scss"
const Home = () => {
  return (
    <div className='home'>
      <SideBar/>
      <FeedSection/>        
    </div>
  )
}

export default Home