import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs'
import React from 'react'
import('./footer.css')
const Footer = () => {
  return (
    <footer className='Footer'>
      <a href='/#' className='footer__logo'>Tamiru</a>
      <ul className="permalink">
        <li><a href='/#'>Home</a></li>
        <li><a href='#experience'>Expreince</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portifolio'>portifolio</a></li>
        <li><a href='#contacts'>Contacts</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://facebook.com'><BsFacebook/></a>
        <a href='https://Twitter.org'><BsTwitter/></a>
        <a href='https://Instagram.org'><BsInstagram/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Tamiru Taye. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer