import {FaAward, FaUsers} from 'react-icons/fa'
import Me from '../../asset/Mee.png'
import React from 'react'
import './About.css'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={Me} alt="About me"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> 8+ Years Working</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Speaks</h5>
              <small> 3+ Languages</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Projects</h5>
              <small> 4+ Projects</small>
            </article>
          </div>
          <p>Software Engineer with a Mechanical Degree complimented with over 8 years of engineering experience. Familiar in reading and interpreting blue prints, using measuring instruments, precision tools and machinery equipment. Knowledgeable in creating various programming languages and troubleshooting heavy equipment in the mechanical field. Familiar with Languages such as Javascript, HTML, CSS and, AJAX. Trilingual in Amharic, Afan Oromo and English. </p>
          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
