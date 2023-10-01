import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me1.jpg';
import HeaderSocial from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vansh Gupta</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt='me'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
