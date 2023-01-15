// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';



import rev1 from '../../asset/Perscholas.jpeg'
import rev2 from '../../asset/ctd.png'
import rev3 from '../../asset/arba minch.jpeg'

import React from 'react'
import "./Testimonials.css"

const data =[
  {
    image:rev1,
    name: 'Software Engineering',
    collage:'Per Scholas',
    review: "Graduated and be equipped to encounter and problem solve challenges that web developers face each day on the job, and fulfill a wide range of careers such as Junior Web Developer, Web Designer,App Developer. Studied JavaScript, HTML, CSS, Nodejs, ExpressJs and React with MERN"
    
  },
  {
    image:rev2,
    name: 'Full Stack Web Developer',
    collage: 'Code The Dream',
    review: "Graduated and be equipped to encounter and problem solve challenges that web developers face each day on the job, and fulfill a wide range of careers such as Junior Web Developer, Web Designer,App Developer. Studied JavaScript, HTML, CSS, Nodejs, ExpressJs and React with MERN"
    
  },
  {
    image:rev3,
    name: 'Mechanical Engineering',
    collage: 'Arba Minch university',
    review: "Studied enurmous subjects help me to solve different current world problems including manufacturing, Design, Renewable Energies, different simulation softwares and mathematical modeling"
    
  },
 
]

const Testimonials = () => {
  return (
    <section id='testimony'>
    <h5>what I have Learned</h5>
    <h2>Education</h2>
    <Swiper className="container testimonials__container"
      modules={[Navigation, Pagination,Scrollbar]}
      spaceBetween={40}
      navigation
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}>

        {
          data.map(({image, name,collage, review}, index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
            <div className="client__avator">
              <img src={image} alt="Review" />
            </div>
            <h5 className='client__name'>{name}</h5>
            <h5 className='client__name'>{collage}</h5>
              <small className="client__review">
                {review}
              </small>
          </SwiperSlide>
      
            )
          })
        }

      
    </Swiper>
    </section>
  )
}

export default Testimonials