import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/me.jpg'
import IMG2 from '../../assets/me.jpg'
import IMG3 from '../../assets/me.jpg'
import IMG4 from '../../assets/me.jpg'
import IMG5 from '../../assets/me.jpg'
import IMG6 from '../../assets/me.jpg'

const data = [
  {
    id: 1,
  image: IMG1, // Assuming IMG1 is a variable containing an image URL
  title: 'Figma dashboard UI kit for data design web apps',
  github: 'https://github.com', // Correct the URL with closing single quote
  demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 2,
  image: IMG2, // Assuming IMG1 is a variable containing an image URL
  title: 'Figma dashboard UI kit for data design web apps',
  github: 'https://github.com', // Correct the URL with closing single quote
  demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 3,
  image: IMG3, // Assuming IMG1 is a variable containing an image URL
  title: 'Figma dashboard UI kit for data design web apps',
  github: 'https://github.com', // Correct the URL with closing single quote
  demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
  image: IMG4, // Assuming IMG1 is a variable containing an image URL
  title: 'Figma dashboard UI kit for data design web apps',
  github: 'https://github.com', // Correct the URL with closing single quote
  demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 5,
  image: IMG5, // Assuming IMG1 is a variable containing an image URL
  title: 'Figma dashboard UI kit for data design web apps',
  github: 'https://github.com', // Correct the URL with closing single quote
  demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 6,
  image: IMG6, // Assuming IMG1 is a variable containing an image URL
  title: 'Figma dashboard UI kit for data design web apps',
  github: 'https://github.com', // Correct the URL with closing single quote
  demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) =>{
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
                 </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href='{demo}' className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio