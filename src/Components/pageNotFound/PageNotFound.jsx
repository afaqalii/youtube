import React from 'react'
import {ImSad} from "react-icons/im"
import "./style.scss"

const PageNotFound = () => {
  return (
    <div className='page-not-found'>
        <ImSad className='sad-emoji'/>
        <h1>Oops, Something went wrong</h1>
        <p>Refresh the page if it still don't work then you have exceded api calls requests</p>
        <p>Try again later</p>
    </div>
  )
}

export default PageNotFound