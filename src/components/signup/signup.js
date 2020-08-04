import React from 'react';
import { useState , useEffect} from 'react';
import {storage} from  '../../firebase';
import { Button, Form, Col, Row } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './signup.scss';
 import Show from '../show/index'
import { Link, NavLink,withRouter } from 'react-router-dom';
import useSignup from '../../hooks/auth/signup';

const Signup = (props) => {

 const [user , setuser] =  useState({});
 const [image ,setImage] = useState(null);
 const [url, setUrl] = useState("");
 const [loading , setLoading] = useState(false);
 const [progress, setProgress] = useState(0);
 const [signup] = useSignup();
 const handleChange = (e) => {
  setuser({...user, [e.target.name]: e.target.value });
  };
  const handleFile = (e) =>{
    if (e.target.files[0]) {
      console.log('kkkkkkkkkkkkk' ,e.target.files[0] );
      setImage(e.target.files[0]);
    }
  }

 const handleSubmit = (e) => {
    e.preventDefault();
    if(image){
      setLoading(true)
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              setLoading(false)
              setUrl(url);
              let userInfo = user;
              userInfo.profile_img = url;
              console.log(',,,,,,,,,,,,,,,,',userInfo );
              signup(userInfo);
              props.history.push('/')
            })
        }
      );
    }else{
      signup(user);
      props.history.push('/')
    }
   
  };
    return (
      <>
          {/* <span>Sign up</span>
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
            <input
            required
              type="text"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
             <input
            // required
              type="file"
              name="profile_img"
              onChange={handleFile}
            />
            <select required name="role" onChange={handleChange}>
            <option selected disabled>Choose your role</option>
                <option value='student'>student</option>
                <option value='instructor'>instructor</option>
            </select>
            <button>Signup</button>
          </form>
          <span>back to <Link to="/">signin</Link></span> */}

<link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
      />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossOrigin="anonymous"></link>

      <Navbar fixed="top" className="black" >

        <Nav className="mr-auto">

          <i class='fas fa-graduation-cap fa-pull-left fa-3x'></i>
          <p className="headeeer" className="animate__animated animate__pulse animate__infinite">EDUSAVIOR</p>

        </Nav>

        <Button className="vanbttn" variant="outline-info"><Link to="/">signin</Link></Button>
        {/* <Link className="vanbt" to="/"><Button className="vanbttn" variant="outline-info">Sign In</Button></Link> */}
      </Navbar>


      <div className="total">

        <img
          className="signuppage"
          src="http://keenitsolutions.com/products/html/edulearn/edulearn-demo/images/slider/home3/slide1.jpg"
          alt="First slide"
        />
        <div className="divreg">
          <p className="animate__animated animate__bounceInDown get50">GET 50+ COURSES FREE ACCESS</p>
          <p className="animate__animated animate__bounceInUp now">REGISTERS NOW</p>
          <p className="animate__animated animate__bounceInLeft noow ">Welcome to EDUSAVIOR</p>
        </div>
       
        <Form className="animate__animated animate__zoomIn signform mr " onSubmit={handleSubmit}>
          <span className="labeel">Sign Up</span>
          <hr className="hrsign"></hr>

          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label className="signlabel" column sm={2}>
              Username
            </Form.Label>
            <Col className="signusername" sm={10}>
              <Form.Control type="text" placeholder="Username" name="username" minlength="3" onChange={handleChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label className="signlabel" column sm={2}>
              Password
            </Form.Label>
            <Col className="signpass" sm={10}>
              <Form.Control type="password" placeholder="Password" name="password" minlength="6" onChange={handleChange} />
            </Col>

          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label className="signlabel" column sm={2}>
              Email
            </Form.Label>
            <Col className="signpass" sm={10}>
              <Form.Control type="email" placeholder="Email" name="email" minlength="9" onChange={handleChange} />
            </Col>

          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label className="signlabel" column sm={2}>
              Image
            </Form.Label>
            <Col className="signpass" sm={10}>
              <Form.Control type="file" placeholder="profile_img" name="profile_img" minlength="9" onChange={handleFile} />
            </Col>
            <Show condition={loading} >
              <img className="loader" src='https://thumbs.gfycat.com/SimilarPlumpBarasingha-max-1mb.gif' />
            </Show>
          </Form.Group>
          <select className="upsel" required name="role" onChange={handleChange}>
            <option selected disabled>Choose your role</option>
                <option value='student'>student</option>
                <option value='instructor'>instructor</option>
            </select>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button className="signlsubmit" type="submit">Sign Up</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>

        
      </>
    );
  
}

export default withRouter(Signup);
