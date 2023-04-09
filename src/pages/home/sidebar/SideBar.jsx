import React from 'react'
import { sideBarData } from './sidebarData'
import "./styles.scss"
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../../store/homeSlice'
const SideBar = () => {

   const dispatch = useDispatch()
    const  sidebarItem = sideBarData.map((category, index) => { 
            const {item, icon} = category
            return (
                  <div className="item" key={index} onClick={() => dispatch(getCategory(item))}>
                     <div className="icon" style={{fontSize:"24px"}}>{icon}</div>
                     <div className="listItem"><li>{item}</li></div>
                  </div>
            )
 }) 

  return (
    <div className='sidebar'>
      <div className="items">
        {sidebarItem}
      </div>
    </div>
  )
}

export default SideBar