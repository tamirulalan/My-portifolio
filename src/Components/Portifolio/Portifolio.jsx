import React from 'react'
import img1 from '../../asset/project1.png'

import img2 from '../../asset/project2.png'
import img3 from '../../asset/project3.png'
import img4 from '../../asset/project4.png'
import img5 from '../../asset/project5.png'
import ('./portifolio.css')

const data =[
  {
    id:1,
    image: img1,
    title: 'Ale Buff',
    github: 'https://github.com/tamirulalan/Ale-Buff',
    url: 'https://tamirulalan.github.io/Ale-Buff/'
  },
  {
    id:2,
    image: img2,
    title: 'Book Store',
    github: 'https://github.com/tamirulalan/Book-Store',
    url: 'https://tamiru-book-store.onrender.com'
  },
  {
    id:3,
    image: img3,
    title: 'Space Battle',
    github: 'https://github.com/tamirulalan/Ale-Buff',
    url: 'https://tamirulalan.github.io/Ale-Buff/'
  },
  {
    id:4,
    image: img4,
    title: 'Pokemon',
    github: 'https://github.com/tamirulalan/-pokemon_app',
    url: 'https://tamirulalan.github.io/Ale-Buff/'
  },
  {
    id:5,
    image: img5,
    title: 'Final Project not yet...',
    github: 'https://github.com/tamirulalan/Ale-Buff',
    url: 'https://tamirulalan.github.io/Ale-Buff/'
  }
]

const portifolio = () => {
  return (
    <section id='portifolio'>
      <h5>My recent Work</h5>
      <h2>Projects</h2>
      <div className="container portifolio__container">
          {data.map(({id,image,title,github,url}) => {
            return(
              <article kry ={id} className='portifolio__item'>
              <div className="portifolio__item-image">
                <img src={image} alt={title} width='297px' height="286px"/>
              </div>
              <h3>{title}</h3>
              <div className="portifolio__item-cta">
                <a href={github} className='btn' target='_blank' rel='noopener noreferrer'>Github</a>
                <a href={url} className='btn btn-primary'>Live Demo</a>
              </div>
            </article>

            )
                })
          }
        

        

       
      </div>
    </section>
  )
}

export default portifolio