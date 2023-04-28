import React from 'react';
import Slider from 'react-slick';

import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    swipeToSlide: true,
    speed: 100,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 922,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <Slider {...settings}>
      <div className='testimonials py-4 px-3'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, amet.
          Illum fugiat commodi quibusdam nihil sapiente maiores quae labore laborum eius,
          architecto, temporibus, asperiores voluptas voluptates soluta praesentium fuga animi?
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava01} alt='' className='w-25 h-25 rounded-2' />
          <div>
            <h6 className='mb-0 mt-3'> John Done </h6>
            <p> Customers </p>
          </div>
        </div>
      </div>
      <div className='testimonials py-4 px-3'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, amet.
          Illum fugiat commodi quibusdam nihil sapiente maiores quae labore laborum eius,
          architecto, temporibus, asperiores voluptas voluptates soluta praesentium fuga animi?
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava02} alt='' className='w-25 h-25 rounded-2' />
          <div>
            <h6 className='mb-0 mt-3'> John Done </h6>
            <p> Customers </p>
          </div>
        </div>
      </div>
      <div className='testimonials py-4 px-3'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, amet.
          Illum fugiat commodi quibusdam nihil sapiente maiores quae labore laborum eius,
          architecto, temporibus, asperiores voluptas voluptates soluta praesentium fuga animi?
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava03} alt='' className='w-25 h-25 rounded-2' />
          <div>
            <h6 className='mb-0 mt-3'> John Done </h6>
            <p> Customers </p>
          </div>
        </div>
      </div>
      <div className='testimonials py-4 px-3'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, amet.
          Illum fugiat commodi quibusdam nihil sapiente maiores quae labore laborum eius,
          architecto, temporibus, asperiores voluptas voluptates soluta praesentium fuga animi?
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava01} alt='' className='w-25 h-25 rounded-2' />
          <div>
            <h6 className='mb-0 mt-3'> John Done </h6>
            <p> Customers </p>
          </div>
        </div>
      </div>
      <div className='testimonials py-4 px-3'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, amet.
          Illum fugiat commodi quibusdam nihil sapiente maiores quae labore laborum eius,
          architecto, temporibus, asperiores voluptas voluptates soluta praesentium fuga animi?
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava02} alt='' className='w-25 h-25 rounded-2' />
          <div>
            <h6 className='mb-0 mt-3'> John Done </h6>
            <p> Customers </p>
          </div>
        </div>
      </div>
    </Slider>
  )
}

export default Testimonials;