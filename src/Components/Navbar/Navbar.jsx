import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {FaBars, FaRegUser, FaSearch} from "react-icons/fa"
import {BsThreeDotsVertical} from "react-icons/bs"
import youtubeLogo from "../../assets/youtubeLogo.jpg"
import "./styles.scss"
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai"
import { toggleSidebarState } from '../../store/homeSlice'

const Navbar = () => {
   
  const [searchedQuery, setSearchedQuery] = useState()
  const dispatch = useDispatch()
  const [showMobileViewSearchBar, setshowMobileViewSearchBar] = useState(false)
  const naviagte = useNavigate()
  const searchHanlder = (e) => {
     if(e.key === "Enter" &  searchedQuery.length > 0) {
        naviagte(`search/${searchedQuery}`)
        setSearchedQuery("")
        setshowMobileViewSearchBar(false)
     }
  }
  return (
    <section className='navbar'>
      <div className={`${showMobileViewSearchBar ? 'mobile-view-searchBar' : 'de-active-searchbar'}`}>
        <div className="left-arrow-div">
        <AiOutlineArrowLeft 
        className='arrow-left'
        onClick={() => setshowMobileViewSearchBar(false)}
        />
        </div>
        <div className="mobile-view-input-field">
        <input 
          type="text" 
          placeholder='Search Youtube'
          onChange={(e) => setSearchedQuery(e.target.value)}
          onKeyUp={searchHanlder}  
          />
        <FaSearch onClick={searchHanlder} />
        </div>
      </div>
        <div className="navbarLeft left">
            <FaBars className='menu-icons' onClick={() => dispatch(toggleSidebarState()) } />
            <div className="youtubeLogo">
               <Link to='/'><img src={youtubeLogo} alt="youtube logo"/></Link>
            </div>
        </div>
        <div className="navbarMiddle middle">
          <div className="inputField">
            <input 
               type="text" 
               placeholder='Search' 
               onChange={(e) => setSearchedQuery(e.target.value)}
               onKeyUp={searchHanlder} />
            <div className="searchButton">
            <FaSearch style={{cursor:"pointer"}} onClick={searchHanlder}/>
            </div>
          </div>
        </div>
        <div className="navbarRigth right">
          <BsThreeDotsVertical className='settings-dots'/>
          <FaSearch 
          className='navbar-search-icon'
          onClick={() => setshowMobileViewSearchBar(true)}
          />
          <div className="signinButton">
            <FaRegUser className='navbar-user-icon' />
            <button>Sign in</button>
          </div>
        </div>
    </section>
  )
}

export default Navbar