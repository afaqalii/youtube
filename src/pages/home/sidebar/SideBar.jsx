import React, { useEffect, useState } from 'react'
import {categories} from "./sidebarData"
import "./styles.scss"
import { useDispatch, useSelector } from 'react-redux'
import { activeItemClick, getCategory } from '../../../store/homeSlice'
const SideBar = () => {
   const dispatch = useDispatch()
   const [isLargeScreen, setisLargeScreen] = useState(null)
   const {  sidebarState }  = useSelector(state => state.home)
   const [sidebarItemActive, setSidebarItemActive] = useState(true)
   const handleSidebarItem = (name) => {
    dispatch(getCategory(name))
    dispatch(activeItemClick())
  }
    const  sidebarItem = categories.map((category, index) => { 
            const {name, icon} = category
            
            return (
                  <div className={`${sidebarItemActive ? "item active":"item"}`} key={index} onClick={() => handleSidebarItem(name)}>
                     <div className="icon" style={{fontSize:"24px"}}>{icon}</div>
                     <div className="listItem"><li>{name}</li></div>
                  </div>
            )
    })
   const onlyMobileItems = categories.filter((item) => {
    return  item.type !== "menu"
   })
   const mobileViewSidebar = onlyMobileItems.map((category, index) => {
      const { name } = category
      return (
      <div 
        className="mobile-view-item"
        key={index}
        onClick={() => dispatch(getCategory(name))}
        >
        {name}
       </div>
      )
      })
      useEffect(() => {
         const handleSize = () => {
          window.innerWidth > 768 ?  setisLargeScreen(true) :  setisLargeScreen(false)
         }
         window.addEventListener("resize", handleSize)
         return  () => {
             window.removeEventListener("resize", handleSize)
         }
      },[])
  return (
    <>
    {
      // isLargeScreen 
      window.innerWidth > 768
      ? <div className={`${sidebarState ? "sidebar hideSidebar" : "sidebar"}`}  >
         <div className="items">
         {sidebarItem}
         </div>
        </div>
      :  
      <div className="mobile-view-items">
      {mobileViewSidebar}
    </div>
    }
    </>
  )
}

export default SideBar