import React from 'react'

import './About.scss';
import { features } from '../../constants';
import { useMediaQuery } from 'react-responsive';
import { BgTabletPattern } from '../../assets';

const About = () => {
  const isBigScreen = useMediaQuery({query: '(min-width: 992px)'});

  return (
    <section className='about | container even-columns section-padding' id='about'>
      <div className='about-content'>
        <h2 className='about-title | head-text'>
          What’s different about Manage?
        </h2>
        
        <p className='about-desc | body-text'>
          Manage provides all the functionality your team needs, without 
          the complexity. Our software is tailor-made for modern digital 
          product teams.
        </p>

        {isBigScreen && (
          <BgTabletPattern className='about-pattern' />
        )}
      </div>

      <div className='about-features'>
        <ul>
          {features.map((feature, index) => (
            <li key={`feature-${index+1}`}>
              <h3 className='about-features-title' data-count={index+1 < 10 ? `0${index+1}` : index+1} >{feature.title}</h3>
              <p className='about-features-description | body-text'>{feature.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
