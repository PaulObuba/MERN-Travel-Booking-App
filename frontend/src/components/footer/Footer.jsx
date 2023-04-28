import React from "react";
import './footer.css';

import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";

import logo from "../../assets/images/logo.png";

const Footer = () => {
  const quick__links = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/tours",
      display: "Tours",
    },
  ]

  const quick__links2 = [
    {
      path: "/gallery",
      display: "Gallery",
    },
    {
      path: "/login",
      display: "Login",
    },
    {
      path: "/register",
      display: "Register",
    },
  ]

  const year = "2020"

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className='logo'>
              <img src={logo} alt='' />
              <p>Lorem ipsum, dolor sit voluptatum dolor vero, esse nam possimus?</p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'> <i class='ri-youtube-line'></i> </Link>
                </span>
                <span>
                  <Link to='#'> <i class='ri-github-fill'></i> </Link>
                </span>
                <span>
                  <Link to='#'> <i class='ri-facebook-circle-line'></i> </Link>
                </span>
                <span>
                  <Link to='#'> <i class='ri-instagram-line'></i> </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'> Discover </h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}> {item.display} </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'> Quick Links </h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}> {item.display} </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'> Contacts </h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className='d-flex align-items-center gap-3 ps-0 border-0'>
                <h6 className='d-flex align-items-center gap-2 mb-0'>
                  <span>
                    <i class='ri-map-pin-line'></i>
                  </span>
                  Address:
                </h6>
                <p className="mb-0"> Sylhel, Banglangolme</p>
              </ListGroupItem>
              <ListGroupItem className='d-flex align-items-center gap-3 ps-0 border-0'>
                <h6 className='d-flex align-items-center gap-2 mb-0'>
                  <span>
                    <i class='ri-mail-line'></i>
                  </span>
                  Email:
                </h6>
                <p className="mb-0"> dev.Syhyl@mail.com</p>
              </ListGroupItem>
              <ListGroupItem className='d-flex align-items-center gap-3 ps-0 border-0'>
                <h6 className='d-flex align-items-center gap-2 mb-0'>
                  <span>
                    <i class='ri-phone-fill'></i>
                  </span>
                  Phone:
                </h6>
                <p className="mb-0"> +123 090 8987 787 </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className="text-center pt-5">
            <p className='copyright'>
              Copyright {year}, design and developed by Muhiili adilbe  sinb all rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
