import React from 'react'

import './Testimonials.scss';
import { Button } from '../../components';
import { testimonials } from '../../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/virtual';
import { useMediaQuery } from 'react-responsive';

const Testimonials = () => {
  const isBigScreen = useMediaQuery({query: '(min-width: 1000px)'});

  return (
    <section className='testimonials | section-padding' id='careers'>
      <h2 className='testimonials-title | head-text'>
        What they’ve said
      </h2>

      <Swiper className='testimonials-carousel' modules={[Virtual]} spaceBetween={50} slidesPerView={isBigScreen ? 3 : 1} virtual>
        {testimonials.map((testimonial, index) => (
          <SwiperSlide className='testimonials-slide' virtualIndex={index} key={`testimonial-${index+1}`}>
            <img src={testimonial.avatar} alt={testimonial.name} />
            <h3 className='head-text'>{testimonial.name}</h3>
            <p className='body-text'>“{testimonial.content}”</p>
          </SwiperSlide>
        ))}
      </Swiper>

      <Button className='testimonials-cta' href='#'>Get Started</Button>
    </section>
  )
}

export default Testimonials
