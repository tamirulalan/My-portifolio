import {useState} from 'react'
import React from 'react'
import {FaBookMedical} from 'react-icons/fa'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineHome, AiOutlineUser, AiFillMessage} from 'react-icons/ai'
import './Nav.css'


const Nav = () => {
 
  const [activeNav, setActiveNav]= useState('#')
  return (
   <nav>
      <a href='/#' onClick={()=>setActiveNav('#')} className={activeNav==='#'? 'active': ''} ><AiOutlineHome/> </a> 
      <a href='/#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about'? 'active': ''} ><AiOutlineUser/> </a>  
      <a href='/#experience' onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'? 'active': ''} ><FaBookMedical/></a>
      <a href='/#services' onClick={()=>setActiveNav('#services')} className={activeNav==='#services'? 'active': ''} ><RiServiceLine/></a> 
      <a href='/#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'? 'active': ''} ><AiFillMessage/></a>
    
   </nav>
 
  )
}

export default Nav