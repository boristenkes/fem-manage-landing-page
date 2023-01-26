import React from 'react'
import Button from '../Button/Button';

import './CTA.scss';
import { BgSimplifySectionDesktop, BgSimplifySectionMobile } from '../../assets';
import { useMediaQuery } from 'react-responsive';

const CTA = () => {
  const isDesktop = useMediaQuery({query: '(min-width: 1000px)'});

  return (
    <section className='cta-parent | bg-primary-400'>
      <div className="cta-wrapper | container even-columns section-padding">
        {isDesktop
          ? <BgSimplifySectionDesktop className='cta-pattern' />
          : <BgSimplifySectionMobile className='cta-pattern cta-pattern-mobile' />}
        <div>
          <h1 className='cta-text | head-text text-neutral-100' style={{fontSize: '3rem'}}>Simplify how your team works today.</h1>
        </div>
        <div>
          <Button className='cta-button' inverted href='#'>Get Started</Button>
        </div>
      </div>
    </section>
  )
}

export default CTA
