import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const ServiceList = () => {

  const servicesData = [
    {
      imgUrl: weatherImg,
      title: " the card title",
      desc: " the card description"
    },
    {
      imgUrl: guideImg,
      title: " the card title",
      desc: " the card description"
    },
    {
      imgUrl: customizationImg,
      title: " the card title",
      desc: " the card description"
    },
  ]

  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg='3' key={index} >
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  )
}

export default ServiceList;