import React from "react";
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import Subtitle from "../sheared/Subtitle";

import worldImg from '../assets/images/world.png';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import experienceImg from '../assets/images/experience.png'

import ShearchBar from "../sheared/ShearchBar";
import ServiceList from "../services/ServiceList";
import FeatuedTourList from "../components/featured-tours/FeatuedTourList";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Testimonials from "../components/testimonials/Testimonials";
import NewsLetter from "../sheared/NewsLetter";


const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Befor You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1> Traveling opens doors to creating <span className="highlight"> memories </span></h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam odit facere et dolor iusto cumque inventore praesentium,
                  accusantium sit qui expedita quis?
                </p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <ShearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services___subtitle"> What we serve </h5>
              <h2 className="services___title"> We offer out best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' clasName='mb-5'>
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title"> Our featured tours </h2>
            </Col>
            <FeatuedTourList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='experience__content'>
                <Subtitle subtitle={'Experience'} />

                <h2> With our all experience <bt /> we will serve you </h2>
                <p> lorem is fare fam itall ithe main <br /> Qitlo tijth tils the said i shall clal the fi.</p>
              </div>
              <div className='counter__wrapper d-flex align-items-center gap-5'>
                <div className='counter__box'>
                  <span>12K+</span>
                  <h6> Successful Trips</h6>
                </div>
                <div className='counter__box'>
                  <span>2K+</span>
                  <h6> Regular Clients</h6>
                </div>
                <div className='counter__box'>
                  <span>15</span>
                  <h6> Years of Experience</h6>
                </div>
              </div>
            </Col>
            <Col>
              <div className='experience__img'>
                <img src={experienceImg} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className='gallery__title'> Visit ours coustomer tour gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'} />
              <h2 className='testimonial__title'> What our fans says about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      <NewsLetter />
    </>
  );
};

export default Home;
