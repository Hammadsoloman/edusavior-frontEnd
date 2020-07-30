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
       
      <Image className='imge' src="https://s3.amazonaws.com/designmantic-logos/logos/2020/Jul/medium-1940-5f1eeefc492ad.png" rounded />
           <p className="headeeer" className="animate__animated animate__pulse animate__infinite">EDUSAVIOUR</p>
          <NavLink className="aaa" to='/'>HOME</NavLink>
          <NavLink  className="aaa" to='/classes'>CLASSES</NavLink>
          <NavLink  className="aaa" to="/dashboard">DASHBOARD</NavLink>
          <NavLink  className="aaa" to='/about'>ABOUT US</NavLink>
          <NavLink  className="aaa" to='/QandA'>QandA</NavLink>
        </Nav>
        <span>{user.username}</span>
    <img src={user.profile_img ? user.profile_img : 'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg'} />
        <Button className="vanbttn" variant="outline-info" onClick={props.logout}>logout</Button>

      </Navbar>

      <Carousel>
     
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500?text=First slide & bg=373940"
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

            src=" https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500/800x400?text=Second slide&bg=282c34"
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
            src=" https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500/800x400 ?text=Third slide&bg=20232a"
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
// class Header extends React.Component   {
//   constructor(props){
//     super(props)
//   }
//   render(){
//     if(!this.props.loggedIn){
//      return <Redirect to="/" /> 
//     }
//     return (
//         <header>
//         <h1>Header</h1>
//         <button onClick={this.props.logout} >logout</button>
//       </header>
//     );
//   }
//   };

export default Header;

// import { Redirect } from "react-router-dom";
// import cookie from 'react-cookies';

// const Header = (props) => {
//   // console.log('fffffffffffffff' , props.userInfo);
//   const user = cookie.load('user');
//     return (
//         <header>
//         <h1>Header</h1>

//         <ul>
//           <li><NavLink to='/'>Home</NavLink></li>
//           <li><NavLink to='/classes'>classes</NavLink></li>
//           <li><NavLink to='/dashboard'>dashboard</NavLink></li>
//           <li><NavLink to='/QandA'>Q&A</NavLink></li>
//         </ul>
//     <span>{user.username}</span>
//     <img src={user.profile_img ? user.profile_img : 'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg'} />
//         <button onClick={props.logout} >logout</button>
//       </header>
//     );
//     };
   
    
// export default Header;
