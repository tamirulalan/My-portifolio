import { Typewriter } from 'react-simple-typewriter'
import HeaderSocial from './HeaderSocial'
import tame from '../../asset/tame.png'
import CTA from './CTA.js'
import React from 'react'
import ('./header.css')





const Header = () => {
  return (

   <div className='Header'>
    <div className="container header_container">
      <div> Hello I'm </div>
      {/* <h1 className='name'>Tamiru Taye</h1> */}
      <div class="sign">
      <span class="fast-flicker">T</span>amiru <span>{' '}</span><span class="flicker"> T</span>aye
      </div>
      <div className="text-light">
      <Typewriter 
            words={['Software Engineer', 'FullStack Webdeveloper', 'Eager to Learn new Tech']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
      </div>
      <CTA/>
      <HeaderSocial/>
      <div className="me">
        <img src={tame} alt="me" />
      </div>
      <a href='#contact' className='scroll__down'>Scroll Down</a>
    </div>
   </div>
  )
}

export default Header