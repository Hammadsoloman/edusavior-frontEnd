import React from 'react';
import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';






import Button from 'react-bootstrap/Button';

// import { Redirect } from "react-router-dom";
const Header = (props) => {
  return (
    <header>
      
      {/* <h1>Header</h1>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/classes'>classes</NavLink></li>
          <li><NavLink to='/dashboard'>dashboard</NavLink></li>
        </ul>
        <button onClick={props.logout} >logout</button> */}


<Nav className="first">
<Image className='imagee' src="https://s3.amazonaws.com/designmantic-logos/logos/2020/Jul/medium-1940-5f1eeefc492ad.png" rounded />
      <Navbar.Brand className="welcome">Welcome to EDUSAVIOUR</Navbar.Brand>
      <div className="m ">
              <a type="button" className="navi">
                <i className="fab fa-facebook-f" />
              </a>
              <a type="button" >
                <i className="fab fa-twitter" />
              </a>
              <a type="button" >
                <i className="fab fa-google-plus" />
              </a>
             
            </div>

            <Navbar.Brand className="apply">Apply Now</Navbar.Brand>

       
      </Nav>
      <Nav className="mr">
      <Col xs={6} md={4}>
      <Image className='image' src="https://s3.amazonaws.com/designmantic-logos/logos/2020/Jul/medium-1940-5f1eeefc492ad.png" rounded />
      {/* <Image className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTW9s7odxGV3zv9w7F0kJS9sBLotnYiot5gJw&usqp=CAU" rounded /> */}
    </Col>
      <Navbar.Brand className="edusa">EDUSAVIOUR</Navbar.Brand>

       
      </Nav>
      <Navbar  fixed="top" className="black" >

        {/* <Navbar.Brand >EDUSAVIOUR</Navbar.Brand> */}
        <Nav className="mr-auto">

          <NavLink to='/'>HOME</NavLink>
          <NavLink to='/classes'>CLASSES</NavLink>
          <NavLink to="/dashboard">DASHBOARD</NavLink>
          <NavLink to='/about'>ABOUT US</NavLink>

        </Nav>

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
          <h3 className="header">WELCOME TO EDUSAVIOUR </h3>
            <p className="pheader"> GOING TOGHETHER TO SUCCESS </p>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"

            src=" https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500/800x400?text=Second slide&bg=282c34"
            alt="Third slide"
          />

          <Carousel.Caption>
          <h3 className="header">ARE YOU READY TO JION US ?</h3>
            {/* <p className="pheader"> key to Success </p>
            <p className='phrases'>Making an Impact in Classrooms and Communities </p> */}
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=" https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500/800x400 ?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="header">Education is the</h3>
            <p className="pheader"> key to Success </p>
            <p className='phrases'>Making an Impact in Classrooms and Communities </p>
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

