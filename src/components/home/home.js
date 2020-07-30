import React from 'react';
import { useEffect, useState } from 'react';
import './home.scss';
import cookie from 'react-cookies';
import useCoursses from '../../hooks/coursses/coursses';
// import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';


import Carousel from 'react-bootstrap/Carousel';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Image from 'react-bootstrap/Image';








const Home = (props) => {
  const token = cookie.load('auth');
  const [allcourses, getCoursses, addCourses, addToDashboard, getCoursesFromDashboard, dashboardCourses, delteCourse, toggleShow] = useCoursses(token);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  useEffect(getCoursses, []);

  return (
    <>
      <h3 className="COURSES">
        ABOUT US
      </h3>
      <p className="wlasac">
        Fusce sem dolor, interdum in fficitur at, faucibus nec lorem. Sed nec molestie justo.           </p>
      <hr></hr>
      <div className="vision">
        <img
          className="d-blllo"

          src="https://images.pexels.com/photos/4145151/pexels-photo-4145151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Third slide"
        />
        <div className="visions">

          <div>
            <h5 className="h5"> WELCOME TO EDUSAVIOUR</h5>
            <p className="wlc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
           </p>
          </div>
          <Button
            className="divbttn"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Our History
      </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">
              Our vision is to make the students practice at their place, first filling in gaps in their understanding and then accelerating their learning.
        </div>
          </Collapse>
          <Button
            className="divbttn"
            onClick={() => setOpen2(!open2)}
            aria-controls="example-collapse-text"
            aria-expanded={open2}
          >
            Our Vision
      </Button>
          <Collapse in={open2}>
            <div id="example-collapse-text">
              Our vision is to make the students practice at their place, first filling in gaps in their understanding and then accelerating their learning.
              so we provide you with some courses that you might need in your life to have a good educational background with a group of the best instructors in that field, also to reduce the gaps between the student and the instructor by doing a one to one meeting .
              you can also ask about something that you still uncleared for you, and the others will replay to your question.
        </div>
          </Collapse><Button
            className="divbttn"
            onClick={() => setOpen3(!open3)}
            aria-controls="example-collapse-text"
            aria-expanded={open3}
          >
            Our Mission
      </Button>
          <Collapse in={open3}>
            <div id="example-collapse-text">
              help you learn the skills you need to achieve your full potential.
        </div>
          </Collapse>

        </div>

      </div>
      <div className="cour">
        <h3 className="COURSES">
          OUR POPULAR COURSES
      </h3>
        <p className="wlasac">
          Fusce sem dolor, interdum in fficitur at, faucibus nec lorem. Sed nec molestie justo.           </p>
        <hr></hr>
        <Container>

          {allcourses.map(item => {
            return (
              <Card style={{ width: '18rem' }} key={item._id}>
                <Card.Img variant="top" src={item.img_url} />
                <Card.Body>
                  <Card.Text className="subj">
                    {item.subject}
                  </Card.Text>
                  <Card.Title>course: {item.course_name}
                  </Card.Title>
                  <Card.Text>
                    Course duration: {item.literature_time}
                  </Card.Text>
                  <Card.Text>
                    instructor: {item.instructor}
                  </Card.Text>

                  <Button
                    className="divbttn"
                    onClick={() => toggleShow(item._id)}
                    aria-controls="example-collapse-text"
                    aria-expanded={item.show}
                  >
                    View Details
                  </Button>
                  <Collapse in={item.show}>
                    <div className={`show-${item.show.toString()}`} id="example-collapse-text">
                      {item.description}
                    </div>
                  </Collapse>

                  <div class="container">




                  </div>
                </Card.Body>
              </Card>
            )
          }).slice(0, 6)}

        </Container>
      </div>
      <h3 className="COURSES">
        ACHIVEMENT
      </h3>
      <p className="wlasac">
        Fusce sem dolor, interdum in fficitur at, faucibus nec lorem. Sed nec molestie justo.           </p>
      <hr></hr>
      <MDBFooter color="mdb-color" className="font-smalll">

        <MDBContainer className="text-center text-md-left yy">
          <MDBRow className="my-4">
            <MDBCol md="4" lg="4">


              <img
                className="d-bloo"

                src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Third slide"
              />
            </MDBCol>

          </MDBRow>

          <div className="achivment">
            <div class="container">
              <div class="row">
                <div class="col">
                  <h2 className="num">60</h2>
                  <h4 className="num4">Teachers</h4>
                </div>
                <div class="col">
                  <h2 className="num">40</h2>
                  <h4 className="num4">Courses</h4>    </div>
              </div>

            </div>
            <div class="container">
              <div class="row">
                <div class="col">
                  <h2 className="num">600</h2>
                  <h4 className="num4">Students</h4>    </div>
                <div class="col">
                  <h2 className="num">1806</h2>
                  <h4 className="num4">SATISFIED CLIENT</h4>    </div>
              </div>

            </div>


          </div>


        </MDBContainer>

      </MDBFooter>

      <h3 className="COURSES">
        FEEDBACK
      </h3>
      <p className="wlasac">
        Fusce sem dolor, interdum in fficitur at, faucibus nec lorem. Sed nec molestie justo.           </p>
      <hr></hr>
      <Carousel className="carousel-innner">
        <Carousel.Item>
          <img
            className="d-blo"
            src="https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-blo"
            src="https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-blo"
            src="https://images.pexels.com/photos/864994/pexels-photo-864994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};


export default Home;