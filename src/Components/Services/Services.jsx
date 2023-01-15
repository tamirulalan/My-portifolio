import {BsFillCheckCircleFill} from 'react-icons/bs'
import React from 'react'
import './services.css'

const services = () => {
  return (
    <section id='services'>
      <h5>Community Services and</h5>
      <h2>Experiences</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>CNC coding and setup</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Creating new G and M code </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Editing the existing program </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Doing setup from simple to complex parts</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Aligning product with axis of the machine </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Running the program by checking everything step by step</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Ispecting product after process is successfully accomplished</p>
            </li>
          </ul>
          
        </article>
        {/* Game */}

        <article className='service'>
          <div className="service__head">
            <h3>CNC Operator</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Loading CNC prepared program to the machine controll system </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>setting tool fit for the program provided</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Checking if the program has an error and reporting to supervisor</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Running the program step by step</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Checking for quality using different method and measuring equipmnts</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Preventive meantenance</p>
            </li>
          </ul>
         
        </article>

        {/* Last  */}
        
        <article className='service'>
          <div className="service__head">
            <h3>Lecturer</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Teaching small to large class students different courses related to mechanical and Software</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Preparing Teaching and study materials</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Participating and leading projects</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Community services</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Leading different training</p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Coaching students</p>
            </li>
          </ul>
          
        </article>
      </div>
    </section>
  )
}

export default services