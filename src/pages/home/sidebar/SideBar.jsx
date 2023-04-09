import React from 'react'
import { sideBarData } from './sidebarData'
import "./styles.scss"
const SideBar = () => {

 const  sidebarItem = sideBarData.map((item, index) => {
       
    return (
            
       <div className="items">
          <div className="item" key={index}>
            <div className="icon" style={{fontSize:"24px"}}>{item.icon}</div>
            <div className="listItem"><li>{item.item}</li></div>
          </div>
       </div>
    )
 } ) 

  return (
    <div className='sidebar'>
        {sidebarItem}
    </div>
  )
}

export default SideBar