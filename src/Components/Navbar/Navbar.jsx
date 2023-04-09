import React from 'react'
import {FaBars, FaRegUser, FaSearch} from "react-icons/fa"
import {BsThreeDotsVertical} from "react-icons/bs"
import youtubeLogo from "../../assets/youtubeLogo.jpg"
import "./styles.scss"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <section className='navbar'>
        <div className="navbarLeft left">
            <FaBars style={{fontSize:"20px"}}/>
            <div className="youtubeLogo">
               
               <Link to='/'><img src={youtubeLogo} alt="youtube logo"/></Link>
            </div>
        </div>
        <div className="navbarMiddle middle">
          <div className="inputField">
            <input type="text" placeholder='Search' />
            <div className="searchButton">
            <FaSearch/>
            </div>
          </div>
          
        </div>
        <div className="navbarRigth right">
          <BsThreeDotsVertical/>
          <div className="signinButton">
            <FaRegUser />
            <button>Sign in</button>
          </div>
        </div>
    </section>
  )
}

export default Navbar