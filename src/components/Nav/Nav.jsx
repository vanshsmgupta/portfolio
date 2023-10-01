import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserPlus} from 'react-icons/bi'
import {BiBookAlt} from 'react-icons/bi'
import {MdOutlineMedicalServices} from 'react-icons/md'
import {RiContactsLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
  <a href="#"  onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
  <a href="#about" onClick={() => setActiveNav('#about')} className={ activeNav ==='#about' ? 'active' : ''}><BiUserPlus/></a>
  <a href="#experience" onClick={() => setActiveNav('#experience')} className={ activeNav ==='#experience' ? 'active' : ''}><BiBookAlt/></a>
  <a href="#services" onClick={() => setActiveNav('#services')} className={ activeNav ==='#services' ? 'active' : ''}><MdOutlineMedicalServices/></a>
  <a href="#contact" onClick={() => setActiveNav('#contact')} className={ activeNav ==='#contact' ? 'active' : ''}><RiContactsLine/></a>
    </nav>
  )
}

export default Nav