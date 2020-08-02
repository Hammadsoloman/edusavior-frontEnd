import React from 'react';
import { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';
import './signin.scss';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Button, Form, Col, Row } from "react-bootstrap";

const Login = (props) => {

  const [user, setuser] = useState({});

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(user.username, user.password);
    props.history.push('/')
  };


  return (
    <>
      {/* <span>Sign in</span>
          <form onSubmit={handleSubmit}>
            <input
            required
              type="text"
              name="username"
              placeholder="Enter Username"
              onChange={handleChange}
            />
            <input
            required
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
            />
            <button>Login</button>
          </form>
          <span>don't have an account! <Link to="/signup">signup</Link></span> */}
     
        <img
          className="signpage"
          src="http://keenitsolutions.com/products/html/edulearn/edulearn-demo/images/slider/home3/slide1.jpg"
          alt="First slide"
        />
       
        <Form className="signform" onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label className="signlabel" column sm={2}>
              Email
            </Form.Label>
            <Col className="signusername" sm={10}>
              <Form.Control  type="text" placeholder="Username"  name="username"  onChange={handleChange}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label className="signlabel" column sm={2}>
              Password
            </Form.Label>
            <Col className="signpass" sm={10}>
              <Form.Control type="password" placeholder="Password"  name="password" onChange={handleChange} />
            </Col>
          </Form.Group>

          
          <Form.Group as={Row}>
            <Col className="signlsubmit" sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Sign in</Button>
            </Col>
          </Form.Group>
          <span>don't have an account! <Link to="/signup">signup</Link></span>
        </Form>
      
         </>

  );

}

export default withRouter(Login);
