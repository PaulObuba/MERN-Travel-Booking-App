import React from 'react';
import './news-letter.css';

import { Container, Row, Col } from 'reactstrap';

import mailTouris from '../assets/images/male-tourist.png';

const NewsLetter = () => {
  return (
    <section className='newsletter'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='newsletter__content'>
              <h2>Subscribe now to get useful traveling informations </h2>

              <div className='newsletter__input'>
                <input type='email' placeholder='Enter your email' />
                <button className='btn newsletter__btn'>Subscribe</button>
              </div>
            </div>
          </Col>

          <Col>
            <img src={mailTouris} alt='' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default NewsLetter;