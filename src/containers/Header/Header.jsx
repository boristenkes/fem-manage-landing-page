import React from 'react'

import './Header.scss';
import { Button } from '../../components';
import { IllustrationIntro, BgTabletPattern } from '../../assets';

const Header = () => {
  return (
    <header className='primary-header | container even-columns section-padding'>
      <div className='primary-header-content'>
        <h1 className='head-text'>
          Bring everyone together to build better products.
        </h1>

        <p className='body-text'>
          Manage makes it simple for software teams to plan day-to-day 
          tasks while keeping the larger team goals in view.
        </p>

        <Button href='#'>Get Started</Button>
      </div>

      <div className='primary-header-image'>
        <IllustrationIntro />
        <BgTabletPattern className='primary-header-image-pattern' />
      </div>
    </header>
  )
}

export default Header
