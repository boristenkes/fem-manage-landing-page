import React, { useState } from 'react'

import './Navbar.scss';
import { Logo } from '../../assets';
import { navLinks } from '../../constants';
import { Button } from '../../components';
import { useMediaQuery } from 'react-responsive';
import { Spin as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const isBigScreen = useMediaQuery({query: '(min-width: 800px)'});

  return (
    <header className='container menu'>
      <a href="/">
        <Logo />
      </a>

      <nav className={`menu-nav${!isBigScreen && '--mobile'} ${isOpen && 'active'}`}>
        <ul className='menu-links'>
          {navLinks.map((link, index) => (
            <li className='menu-link' key={`nav-link-${index+1}`}>
              <a onClick={() => setOpen(false)} href={link.link}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {isBigScreen
        ? <Button href='#'>Get Started</Button>
        : <Hamburger color='var(--clr-accent-500)' size={30} label='Toggle Menu' toggled={isOpen} toggle={setOpen} />
      }
    </header>
  )
}

export default Navbar
