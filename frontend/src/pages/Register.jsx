import React, { useState } from "react";
import '../styles/login.css';

import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';

const Register = () => {
  
  const [credentials, setCredentials] = useState({
    username: undefined,
   email: undefined,
  password: undefined
  })

  const handleChange = (e) => { 
    setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
   }
    
  // sending data to the back end
  const handleClick = (e) => {
    e.preventDefault();

  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className='login__container d-flex justify-content-between'>
              <div className='login__img'>
                <img src={registerImg} alt='' />
              </div>

              <div className='login__form'>
                <div className='user'>
                  <img src={userIcon} alt='' />
                </div>
                <h2>Register</h2>

                <Form>
                  <FormGroup>
                    <input type='text' id='username' placeholder='Username' onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <input type='email' id='email' placeholder='Email' onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <input type='password' id='password' placeholder='Password' onChange={handleChange} required />
                  </FormGroup>
                  <Button type='submit' className='btn secondary__btn auth__btn' >Create Account</Button>
                </Form>
                <p>Already have and account? <Link to='/login'>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
