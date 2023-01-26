import React from 'react'

import './Footer.scss';
import { socialIcons, footerLinks } from '../../constants';
import { Logo } from '../../assets';
import { Button } from '../../components';

const Footer = () => {
  return (
    <footer className='bg-accent-600'>
      
      <div className="footer-wrapper container even-columns section-padding">
        <div className='footer-logo-social'>
          <Logo style={{'--clr-logo': 'var(--clr-primary-100)'}} />

          <ul>
            {socialIcons.map((icon, index) => (
              <li key={`social-${index+1}`}>
                <a href={icon.link} target='_blank'>
                  {icon.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='footer-links'>
          {footerLinks.map((listOfLinks, index) => (
            <ul key={`footer-link-link-${index+1}`}>
              {listOfLinks.links.map((link, index) => (
                <li key={`footer-link-${index+1}`}>
                  <a href={link.link}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className='footer-form'>
          <form>
              <input type="email" placeholder='Updates in your inbox…' />
              <Button href='#'>Go</Button>
          </form>
          <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
