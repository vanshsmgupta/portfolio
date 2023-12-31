import React from 'react'
import './About.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {GoProjectSymlink} from 'react-icons/go'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>10+ Completed</small>
          </article>

          <article className='about__card'>
            <GoProjectSymlink className='about__icon'/>
            <h5>Projects</h5>
            <small>80+ Completed</small>
          </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim debitis cumque quam esse perspiciatis iste quod vitae sint nobis? Quibusdam!</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About