import React from 'react';
import TourCard from '../../sheared/TourCard';
import tourData from '../../assets/data/tours';
import { Col } from 'reactstrap';

const FeatuedTourList = () => {
  return (
    <>
      {tourData?.map((tour) => (
        <Col lg='3' className='mb-4' key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  )
}

export default FeatuedTourList;