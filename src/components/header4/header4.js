import React from 'react';
import './header4.scss';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import cookie from 'react-cookies';

import Button from 'react-bootstrap/Button';

const Header2 = (props) => {
  const user = cookie.load('user');
  
  return (
    <header>
      
      <Navbar  fixed="top" className="black" >

        <Nav className="mr-auto">
       
        <i class='fas fa-graduation-cap fa-pull-left fa-3x'></i>
           <p className="headeeer" className="animate__animated animate__pulse animate__infinite">EDUSAVIOR</p>
          <NavLink exact className="aaa" to='/'>HOME</NavLink>
          <NavLink exact className="aaa" to='/classes'>CLASSES</NavLink>
          <NavLink exact  className="aaa" to="/dashboard">DASHBOARD</NavLink>
          <NavLink exact className="aaa" to="/QandA">Q&A</NavLink>
          <NavLink exact className="aaa" to='/about'>ABOUT US</NavLink>
          {/* <NavLink  className="aaa" to='/appointments'>Appointments</NavLink> */}
        </Nav>
       <img className="userImage" src={user.profile_img ? user.profile_img : 'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg'} />
        <span className="userName">{user.username}</span>
        <Button className="vanbttn" variant="outline-info" onClick={props.logout}>logout</Button>

      </Navbar>
      <link
 rel="stylesheet"
 href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
/>
      <div className="bg">
         <img
            className="d-block w-100 classs" 
            src="https://img.freepik.com/free-photo/opened-books-table-with-copy-space_23-2148448114.jpg?size=626&ext=jpg&ga=GA1.2.856959889.1595936702"
            alt="First slide"
          />
           <div class="centered"> QUESTION & ANSWER</div>
      </div>
      
    </header>
  );
};

export default Header2;

