import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'
const HeaderSocial = () => {
  return (
    <div className='header_social'>
        <a href='https://www.linkedin.com/in/tamiru-taye/' target='_blank' rel='noopener noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/tamirulalan' target='_blank' rel='noopener noreferrer'><BsGithub/></a>
        <a href='http://twitter.com' target='_blank' rel='noopener noreferrer'><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocial