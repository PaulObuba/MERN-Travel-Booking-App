import React, { useState } from "react";
import '../styles/login.css';

import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';

const Login = () => {
  
  const [credentials, setCredentials] = useState({
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
                <img src={loginImg} alt='' />
              </div>

              <div className='login__form'>
                <div className='user'>
                  <img src={userIcon} alt='' />
                </div>
                <h2>Login</h2>

                <Form>
                  <FormGroup>
                    <input type='email' id='email' placeholder='Email' onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <input type='password' id='password' placeholder='Password' onChange={handleChange} required />
                  </FormGroup>
                  <Button type='submit' className='btn secondary__btn auth__btn' >Login</Button>
                </Form>
                <p>Don't have and account? <Link to='/register'>Create</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
