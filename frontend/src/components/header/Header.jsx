import React, { useRef, useEffect } from "react";
import "./header.css";

import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const headerRef = useRef(null);

  const stickyHeaderFuc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    stickyHeaderFuc();

    return window.removeEventListener('scroll', stickyHeaderFuc)
  })

  const nav_items = [
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
  ];

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className='nav__wapper d-flex align-items-center justify-content-between'>
            <div className='logo'>
              <img src={logo} alt='' />
            </div>

            <div className='navigation'>
              <ul className='menu d-flex align-items-center gap-5'>
                {nav_items.map((item, index) => (
                  <li className='nav__item' key={index}>
                    <NavLink to={item.path} className={navClass => navClass.isActive ? "active__link" : ""} > {item.display} </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className='nav__right d-flex align-items-center gap-4'>
              <div className='nav__btns d-flex align-items-center gap-4'>
                <Button className="btn secondary__btn">
                  <Link to='/login'> Login </Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to='/register'> Register </Link>
                </Button>
              </div>

              <div className="mobile__menu">
                <i class='ri-menu-line'></i>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

// 
