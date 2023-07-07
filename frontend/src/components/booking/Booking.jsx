import React, { useState, useContext } from "react";
import "./booking.css";

import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour;
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullname: "",
    phone: "",
    guestSize: 2,
    bookAt: "",
  });

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // sending data to the back end
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      if (!user || user === undefined || user === null) {
        alert("Please sign in");
      }

      const res = await fetch(`${BASE_URL}/booking`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });

      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }

      navigate("/thank-you");
    } catch (err) {
      alert(err.message);
    }
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) + Number(serviceFee);

  return (
    <div className='booking'>
      <div className='booking__top d-flex justify-content-between align-items-center'>
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span>
          <i class='ri-star-s-fill'></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      <div className='booking__form'>
        <h5>Information</h5>
        <Form className='booking__info-form' onSubmit={handleClick}>
          <FormGroup>
            <input
              type='text'
              id='fullName'
              placeholder='Full Name'
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type='number'
              id='phone'
              placeholder='Phone'
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className='d-flex align-items-center gap-3'>
            <input
              type='date'
              id='bookAt'
              placeholder=''
              required
              onChange={handleChange}
            />
            <input
              type='number'
              id='guestSize'
              placeholder='Guest'
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      <div className='booking__bottom'>
        <ListGroup>
          <ListGroupItem className='border-0 px-0'>
            <h5 className='d-flex align-items-center gap-1'>
              ${price} <i class='ri-close-line'></i> 1 person
            </h5>
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

        <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
