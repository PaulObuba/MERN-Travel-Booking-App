import React, { useState, useEffect } from "react";
import '../styles/tour.css';
import { Col, Container, Row } from "reactstrap";

import CommonSection from "../sheared/CommonSection";
import ShearchBar from "../sheared/ShearchBar";
import TourCard from "../sheared/TourCard";
import NewsLetter from "../sheared/NewsLetter";

// import tourData from "../assets/data/tours";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
// import [data: tours, loading, error ] from 


const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours`);
  console.log(tours)

  useEffect(() => {
    const pages = Math.ceil(5 / 2);
    setPageCount(pages)
  }, [page])

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <ShearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {tours?.map(tour => (
              <Col lg='3' className="mb-4" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}

            <Col lg='12'>
              <div className="d-flex justify-content-center align-items-center gap-3 mt-4 pagination">
                {[...Array(pageCount).keys()].map(number => (
                  <span className={page === number ? 'active__page' : ''} key={number} onClick={() => setPage(number)}>
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
        <NewsLetter />
      </section>
    </>
  );
};

export default Tours;
