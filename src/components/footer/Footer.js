/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.css';
import { footerItems, socialItems } from './FooterItems';

const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>
        SAGAR
      </a>
      <ul className='permalinks'>
        {footerItems.map((item) => (
          <li key={item.id}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className='footer__socials'>
        {socialItems.map((socialItem) => (
          <a
            key={socialItem.id}
            href={socialItem.href}
            target='_blank'
            rel='noreferrer'
          >
            {socialItem.icon}
          </a>
        ))}
      </div>

      <div className='footer__copyright'>
        <small>&copy; SAGAR All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
