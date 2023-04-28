import React, { useState } from 'react';
import './booking.css';

import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userId: "01",
    userEmail: "peterson@123.com",
    fullname: "",
    phone: "",
    guestSize: 2,
    bookAt: ''
  })

  const handleChange = (e) => { 
    setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
   }
   
  // sending data to the back end
  const handleClick = (e) => {
    e.preventDefault();

    navigate('/thank-you')
  }

  const serviceFee = 10;
  const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee)

  return (
    <div className='booking'>
      <div className='booking__top d-flex justify-content-between align-items-center'>
        <h3> ${price} <span>/per person</span></h3>
        <span>
          <i class='ri-star-s-fill'></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      <div className='booking__form'>
        <h5>Information</h5>
        <Form className='booking__info-form' onSubmit={handleClick}>
          <FormGroup>
            <input type='text' id='fullName' placeholder='Full Name' required onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <input type='number' id='phone' placeholder='Phone' required onChange={handleChange} />
          </FormGroup>
          <FormGroup className='d-flex align-items-center gap-3' >
            <input type='date' id='bookAt' placeholder='' required onChange={handleChange} />
            <input type='number' id='guestSize' placeholder='Guest' required onChange={handleChange} />
          </FormGroup>
        </Form>
      </div>
      <div className='booking__bottom'>
        <ListGroup>
          <ListGroupItem className='border-0 px-0'>
            <h5 className='d-flex align-items-center gap-1'> ${price} <i class='ri-close-line'></i> 1 person </h5>
            <span> ${price} </span>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0'>
            <h5> Service Charge </h5>
            <span> ${serviceFee} </span>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0'>
            <h5> Total </h5>
            <span> ${totalAmount} </span>
          </ListGroupItem>
        </ListGroup>

        <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}> Book Now </Button>
      </div>
    </div>
  )
}

export default Booking;