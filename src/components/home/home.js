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

import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h3 className="COURSES">
        ABOUT US
      </h3>
      <p className="wlasac">

      We work hard to be the pioneer in virtual learning, and that by using video stream and real time chat in our courses         </p>
      <hr></hr>

      <div className="vision">
        <img
          className="d-blllo"

          src="http://keenitsolutions.com/products/html/edulearn/edulearn-demo/images/about/about.jpg"
          // src="https://images.pexels.com/photos/1110355/pexels-photo-1110355.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

          alt="Third slide"
        />
        <div className="visions">

          <div>
            <h5 className="h5"> WELCOME TO EDUSAVIOUR</h5>
            <p className="wlc">
            edusavior will be your favorite website that provide you with some courses that you might need in your life to have a good educational background with a group of the best instructors in that field
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
              First website in the Arab word that give courses in alive stream.
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

        These are the most viewed courses on our website</p>
        <hr></hr>

        <Container>

          {allcourses.map(item => {
            return (
              <Card className="caaard" style={{ width: '18rem' }} key={item._id}>
                <Card.Img variant="top" src={item.img_url} />
                <Card.Body>
                  <section id="homeheight">

                  <Card.Text className="subj">
                    {item.subject}
                  </Card.Text>
                  {/* <hr className="line"></hr> */}
                  <Card.Title>course: {item.course_name}
                  </Card.Title>
                  </section>

                  {/* <div className="uul">

                  <i class='f fas fa-star fa-spin fa-3x'></i>
                  <i class='f fas fa-star fa-spin fa-3x'></i>
                  <i class='f fas fa-star fa-spin fa-3x'></i>
                  <i class='f fas fa-star fa-spin fa-3x'></i>
                  <i class='f fas fa-star fa-spin fa-3x'></i>
                  <i class='k'>|</i>
                  <i class='k'>25 Reviews</i>
                  </div> */}


                  <Card.Text>
                    Course duration: {item.literature_time}
                  </Card.Text>
                  <Card.Text>
                    Instructor: {item.instructor}
                  </Card.Text>
              
                    <Button
                    className="classbttn"
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

      We have obtained many partnerships with educational institutions, in addition to the achievements below       </p>
      <hr></hr>

      <MDBFooter color="mdb-color" className="font-smalll">

        <MDBContainer className="text-center text-md-left yy">
          <MDBRow className="my-4">
            <MDBCol md="4" lg="4">


              <img
                className="d-bloo"

                src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Third slide"
              />
            </MDBCol>

          </MDBRow>

          <div className="achivment">
            <div class="container">
              <div class="row">
                <div class="col">
                  <h2 className="num">60</h2>
                  <h4 className="num4">TEACHERS</h4>
                </div>
                <div class="col">
                  <h2 className="num">40</h2>
                  <h4 className="num4">COURSES</h4>    </div>
              </div>

            </div>
            <div class="container">
              <div class="row">
                <div class="col">
                  <h2 className="num">600</h2>
                  <h4 className="num4">STUDENTS</h4>    </div>
                <div class="col">
                  <h2 className="num">1806</h2>
                  <h4 className="num4">SATISFIED CLIENT</h4>    </div>
              </div>

            </div>


          </div>


        </MDBContainer>

      </MDBFooter>

      <h3 className="COURSES">
      OUR INSTUCTORS
      </h3>
      {/* <p className="wlasac">
        Fusce sem dolor, interdum in fficitur at, faucibus nec lorem. Sed nec molestie justo.           </p> */}
      <hr className="hrhoome"></hr>
      <Carousel className="carousel-innner">
        <Carousel.Item>
          <img
            className="d-blo"
            src="https://images.pexels.com/photos/1098601/pexels-photo-1098601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="First slide"
          />
          <Carousel.Caption className="feeedback">
          <img
            className="d-bloooooo"
            src="https://scontent.famm7-1.fna.fbcdn.net/v/t1.15752-9/116913383_637492567180042_8115606400444578690_n.jpg?_nc_cat=100&_nc_sid=b96e70&_nc_eui2=AeHxiTL32aQ-4Uli_n9iq1NCnt3jDDUz7Tee3eMMNTPtN03a0WIePSmDiTIn-R2Lmbyzp9t4skrjcxrASIrUeyht&_nc_ohc=tP9C5fY5VNoAX_JUrAX&_nc_ht=scontent.famm7-1.fna&oh=a6de8a6dc188258e47920a3083c8509a&oe=5F50A6BC"
            
          />
          <h3>Reham AL-Sobh</h3>
            <p>Tempor non elit nec augue nec gravida et sed velit. Aliquam tempus eget lorem ut malesuada. Phasellus dictum est sed libero posuere dignissim.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-blo"
            src="https://images.pexels.com/photos/1098601/pexels-photo-1098601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Third slide"
          />

          <Carousel.Caption className="feeedback">
          <img
            className="d-bloooooo"
            src="https://scontent.famm7-1.fna.fbcdn.net/v/t1.0-9/92538527_2553749711512139_4722491153847418880_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeEjdpFdgij5EUbKvyi7IX4udbJRkcXBUh11slGRxcFSHdtPRpTRrnmeSGdRic1ccQ7a9Y8bjeZOkqXm33qhPOIn&_nc_ohc=RGzjzbr3Dt4AX8lMeqt&_nc_oc=AQnhdmJQw0ZBIbjiGorohvb4FAgjD2S6ugp5FiPXTZ5LrQEWkdRxOL-Eso_exjnL57g&_nc_ht=scontent.famm7-1.fna&oh=d2381c70c54b528174d3545ad9a9a5fb&oe=5F500941"
            
          />
          <h3>Osama Mousa</h3>
            <p>Tempor non elit nec augue nec gravida et sed velit. Aliquam tempus eget lorem ut malesuada. Phasellus dictum est sed libero posuere dignissim.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-blo"
            // src="https://images.pexels.com/photos/864994/pexels-photo-864994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            src="https://images.pexels.com/photos/1098601/pexels-photo-1098601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

            alt="Third slide"
          />

          <Carousel.Caption className="feeedback">
          <img
            className="d-bloooooo"
            src="https://files.slack.com/files-pri/TNGRRLUMA-F018K5WB23B/face.jpg"
            
          />
            <h3>Hammad AbuSulaiman</h3>
            <p>Tempor non elit nec augue nec gravida et sed velit. Aliquam tempus eget lorem ut malesuada. Phasellus dictum est sed libero posuere dignissim.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-blo"
            src="https://images.pexels.com/photos/1098601/pexels-photo-1098601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="First slide"
          />
          <Carousel.Caption className="feeedback">
          <img
            className="d-bloooooo"
            src="https://ca.slack-edge.com/TNGRRLUMA-UTE8D5M2L-dde46e5d5fac-512"
            
          />
          <h3>Amal Almomnai</h3>
            <p>Tempor non elit nec augue nec gravida et sed velit. Aliquam tempus eget lorem ut malesuada. Phasellus dictum est sed libero posuere dignissim.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <ScrollUpButton />
      </div>
    </>
  );
};


export default Home;

