import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BiLogoInstagram} from 'react-icons/bi'
import {FaWhatsapp} from 'react-icons/fa'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_li2rzcr', 'template_ojgkrjp', form.current, '-G4nDnjyLkuzHAwgk')
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>gvansh2434@gmail.com</h5>
            <a href="mailto:gvansh2434@gmail.com" target='_blank'> Send a message</a>
          </article>
          <article className='contact__option'>
            <BiLogoInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>vanshsmgupta</h5>
            <a href="https://m.me/vanshsmgupta" target='_blank'> Send a message</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+919413690469</h5>
            <a href="https://api.whatsapp.com/send?phone+919413690469" target='_blank'> Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact