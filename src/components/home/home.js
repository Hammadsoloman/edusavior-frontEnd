import React from 'react';
import { useEffect, useState } from 'react';
import './home.scss';
import useCoursses from '../../hooks/coursses/coursses';
// import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';






const Home = (props) => {
  const [allcourses, getCoursses] = useCoursses(props.token);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  // getCoursses(props.token)
  useEffect(getCoursses, []);
  // console.log('allcourses', allcourses);
  return (
    <>
      <h3 className="COURSES">
      ABOUT US
      </h3>
      <div className="vision">
        <img
          className="d-blo"

          src="https://images.pexels.com/photos/4145151/pexels-photo-4145151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Third slide"
        />
        <div className="visions">
          {/* <h3 className="h3vision">Our vision</h3>
          <p className="pvision">Our vision is to make the students practice at their place, first filling in gaps in their understanding and then accelerating their learning. so we provide you with some courses that you might need in your life to have a good educational background with a group of the best instructors in that field, also to reduce the gaps between the student and the instructor by doing a chat or by the all users by asking about something that you still uncleared for you, and the others will replay to your question.</p> */}

          <div>
              <h5 className="h5"> WELCOME TO EDUSAVIOUR</h5>
            <p className="wlc">
               Who We Are ? 
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
      <Container>

        {allcourses.map(item => {
           return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.img_url} />
            <Card.Body>
              <Card.Title>course: {item.course_name}</Card.Title>
              <Card.Text>
                Course duration: {item.literature_time}
              </Card.Text>
              <Card.Text>
                {item.subject}   instructor: {item.instructor}
              </Card.Text>
              
              <Button
            className="divbttn"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            View Details
      </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">
            {item.description}
        </div>
          </Collapse>
            </Card.Body>
          </Card>
           )
        }).slice(0,6)}

      </Container>
      </div>
      
    </>
  );
};


export default Home;