import React from 'react';
import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import cookie from 'react-cookies';

import Button from 'react-bootstrap/Button';

// import { Redirect } from "react-router-dom";
const Header = (props) => {
  const user = cookie.load('user');
  
  return (
    <header>
      
      <Navbar  fixed="top" className="black" >

        <Nav className="mr-auto">
       
      {/* <Image className='imge' src="https://s3.amazonaws.com/designmantic-logos/logos/2020/Jul/medium-1940-5f1eeefc492ad.png" rounded /> */}
        <i class='fas fa-graduation-cap fa-pull-left fa-3x'></i>
           <p className="headeeer" className="animate__animated animate__pulse animate__infinite">EDUSAVIOR</p>
          <NavLink className="aaa" to='/'>HOME</NavLink>
          <NavLink  className="aaa" to='/classes'>CLASSES</NavLink>
          <NavLink  className="aaa" to="/dashboard">DASHBOARD</NavLink>
          <NavLink  className="aaa" to="/QandA">Q&A</NavLink>
          <NavLink  className="aaa" to='/about'>ABOUT US</NavLink>
        </Nav>
       <img className="userImage" src={user.profile_img ? user.profile_img : 'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg'} />
        <span className="userName">{user.username}</span>
        <Button className="vanbttn" variant="outline-info" onClick={props.logout}>logout</Button>

      </Navbar>

      <Carousel>
     
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src="http://keenitsolutions.com/products/html/edulearn/edulearn-demo/images/slider/home1/slide1.jpg?text=First slide & bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
          <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
  />
          <h3 className="header" className="animate__animated animate__bounceInLeft animate__repeat-1" >WELCOME TO EDUSAVIOUR </h3>
            <p className="pheader" className="animate__animated animate__bounceInRight animate__repeat-1"> we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. With assessments, learning paths and courses authored by industry experts, our platform helps businesses and individuals benchmark expertise across roles, speed up release cycles and build reliable, secure products. </p>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"

            src=" http://keenitsolutions.com/products/html/edulearn/edulearn-demo/images/slider/home1/slide2.jpg?text=Second slide&bg=282c34"
            alt="Third slide"
          />

          <Carousel.Caption>
          <h3 className="header" className="animate__animated animate__bounceInLeft animate__repeat-1">ARE YOU READY TO JION US ?</h3>
            <p className="pheader" className="animate__animated animate__bounceInRight animate__repeat-1"> we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. With assessments, learning paths and courses authored by industry experts, our platform helps businesses and individuals benchmark expertise across roles, speed up release cycles and build reliable, secure products. </p>
            {/* <p className='phrases'>Making an Impact in Classrooms and Communities </p> */}
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=" http://keenitsolutions.com/products/html/edulearn/edulearn-demo/images/slider/home1/slide3.jpg?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="header" className="animate__animated animate__bounceInLeft animate__repeat-1">Education is the key to Success</h3>
            <p className="pheader" className="animate__animated animate__bounceInRight animate__repeat-1"> we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. With assessments, learning paths and courses authored by industry experts, our platform helps businesses and individuals benchmark expertise across roles, speed up release cycles and build reliable, secure products. </p>
            {/* <p className='phrases'>Making an Impact in Classrooms and Communities </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      
    </header>
  );
};

export default Header;

