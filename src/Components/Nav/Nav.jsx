import {useState} from 'react'

import {FaBookMedical} from 'react-icons/fa'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineHome, AiOutlineUser, AiFillMessage} from 'react-icons/ai'
import ('./Nav.css')


const Nav = () => {
 
  const [activeNav, setActiveNav]= useState('#')
  return (
   <nav>
   <ul>
    <li><a href='/#' onClick={()=>setActiveNav('#')} className={activeNav==='#'? 'active': ''} ><AiOutlineHome/> </a> </li>
   <li><a href='/#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about'? 'active': ''} ><AiOutlineUser/> </a> </li> 
    <li><a href='/#experience' onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'? 'active': ''} ><FaBookMedical/></a></li>
   <li><a href='/#services' onClick={()=>setActiveNav('#services')} className={activeNav==='#services'? 'active': ''} ><RiServiceLine/></a></li> 
    <li><a href='/#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'? 'active': ''} ><AiFillMessage/></a></li>
   </ul>
   </nav>
 
  )
}

export default Nav