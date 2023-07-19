import React from 'react';
import './footer.css';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>
        SAGAR
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>

        <li>
          <a href='#about'>About</a>
        </li>

        <li>
          <a href='#experience'>Experience</a>
        </li>

        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>

        <li>
          <a href='#contact'>contact</a>
        </li>
      </ul>
      <div className='footer__socials'>
        <a
          href='https://www.linkedin.com/in/sagarkumar2535/'
          target='_blank'
          rel='noreferrer'
        >
          <BsLinkedin />
        </a>

        <a href='https://github.com/sagar2535' target='_blank' rel='noreferrer'>
          <BsGithub />
        </a>

        <a
          href='https://www.instagram.com/i.m_sagar_gupta/'
          target='_blank'
          rel='noreferrer'
        >
          <BsInstagram />
        </a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; SAGAR All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
