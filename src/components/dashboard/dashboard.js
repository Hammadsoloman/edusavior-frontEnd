import React from 'react';
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useCoursses from '../../hooks/coursses/coursses';
import cookie from 'react-cookies';
import './dashboard.scss';
import Container from 'react-bootstrap/Container';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

// import { Redirect } from "react-router-dom";

const Dashboard = (props) => {
  const [allcourses, getCoursses, addCourses, addToDashboard, getCoursesFromDashboard, dashboardCourses, delteCourse, toggleShow] = useCoursses(props.token);
  // console.log('props.dashboardCourses',props.userInfo);
  const user = cookie.load('user');

  useEffect(getCoursesFromDashboard, []);
  return (
    <>

      <SideNav
        onSelect={(selected) => {
          // Add your code here
        }}
      >
        <SideNav.Toggle>
        <p className="profileside">Profile</p>
          </SideNav.Toggle> 
        <SideNav.Nav defaultSelected="home">

          <NavItem eventKey="home">

            <NavIcon>

              <img src={user.profile_img ? user.profile_img : 'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg'} />
            </NavIcon>
            <NavText>
              <p className="userside">{user.username}</p>
              <p className="sidenav">Email :
              <p className="sidenaav">{user.email}</p>
           
              </p>

              <p className="sidenav">Role :
              <p className="sidenaav"> {user.role}</p>
               </p>
              <p className="sidenav">Joined Courses Number :
              <p className="sidenaav">{dashboardCourses.length}</p>
              </p>
            </NavText>
          </NavItem>

        </SideNav.Nav>
      </SideNav>
        <div className="divdash"> MY DASHBOARD</div>
        <hr className="hrdash"></hr>
      <Container className="dash">
        {dashboardCourses.map(item => {
        
          return (
            <Card className="caaard" style={{ width: '18rem' }} key={item._id}>
              <Card.Img variant="top" src={item.img_url} />
              <Card.Body>
                <Card.Text className="subj">
                  {item.subject}
                </Card.Text>
                {/* <hr className="line"></hr> */}
                <Card.Title>course: {item.course_name}
                </Card.Title>
                <div className="uul">

                  <i class='f fas fa-star fa-spin fa-3x'></i>
                  <i class='f fas fa-star fa-spin fa-3x'></i>
                  <i class='f fas fa-star fa-spin fa-3x'></i>
                  <i class='f fas fa-star fa-spin fa-3x'></i>
                  <i class='f fas fa-star fa-spin fa-3x'></i>
                  <i class='k'>|</i>
                  <i class='k'>25 Reviews</i>
                </div>

                <Card.Text className="description">
                  Description : <br></br>
                  {item.description}
                </Card.Text>
                <Card.Text>
                  start_date: {item.start_date}
                </Card.Text>
                <Card.Text>
                  Course duration: {item.literature_time}
                </Card.Text>
                <Card.Text>
                  Instructor: {item.instructor}
                </Card.Text>
                <Button className="detailsbtn bttn1">
                  <Link className="detailstxt" to={`details/${item._id}`}>View Details</Link>
                </Button>
                <Button
                  className="detailsbtn"
                  onClick={() => delteCourse(item._id)}
                >
                  Delete Course
      </Button>
              </Card.Body>
            </Card>
          )
        })}
      </Container>
      <div>
        <ScrollUpButton />
      </div>
    </>
  );
};


export default Dashboard;