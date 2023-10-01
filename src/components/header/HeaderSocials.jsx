import React from 'react';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' target='_blank'><GrLinkedinOption /></a>
      <a href='https://github.com' target='_blank'><FaGithub/></a>
      <a href='https://instagram.com' target='_blank'><FaInstagram/></a>
    </div>
  );
}

export default HeaderSocials;
