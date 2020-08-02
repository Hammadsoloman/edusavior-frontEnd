import React from 'react';
import {useEffect} from 'react';
import Show from '../show/index'
import cookie from 'react-cookies';
import useCoursses from '../../hooks/coursses/coursses';

import cookie from 'react-cookies';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Image from 'react-bootstrap/Image';
import { Link, NavLink } from 'react-router-dom';
import '../../components/classes/classes.scss';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';



const Classes = (props) => {
    const [allcourses,getCoursses,addCourses,addToDashboard , getCoursesFromDashboard,dashboardCourses,delteCourse , toggleShow ,deleteCourseFromCourses] = useCoursses(props.token);
  const user = cookie.load('user');
     

    useEffect(getCoursses, []);
    const user = cookie.load('user');
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
              {/* <p className="sidenaav">{dashboardCourses.length}</p> */}
              </p>
            </NavText>
          </NavItem>

        </SideNav.Nav>
      </SideNav>

       <div className="classes">
        <h3 className="CLASSES">
          OUR CLASSES
      </h3>
      <hr className="hrdash"></hr>
        <Container className="dash">

          {allcourses.map(item => {
            return (
              <Card className="imageclasses" style={{ width: '18rem' }} key={item._id}>
                <Card.Img variant="top" src={item.img_url} />
                <Card.Body>
                  <Card.Text className="subj1">
                    {item.subject}
                  </Card.Text>
                  <Card.Title className="couresclasses" >course name: <span>{item.course_name}</span> 
                  </Card.Title>
                  <Card.Text >
                  <span className="spanpar">Course duration: </span>  {item.literature_time}
                  </Card.Text>
                  <Card.Text >
                  <span className="spanpar"> instructor name:</span> {item.instructor}
                  </Card.Text>
                  {/* <Collapse className="textclasses" in={item.show}>
                    <div className={`show-${item.show.toString()}`} id="example-collapse-text">
                      {item.description}
                    </div>

                  </Collapse> */}
                  <p className="textclasses1"><span className="spanpar">Course description:</span><br></br> {item.description} </p>
<Show condition ={user.username === item.instructor}>

          <button onClick={()=> deleteCourseFromCourses(item._id) }>X</button>
          </Show>
                  <Button className="adtodashbtn" onClick={()=> addToDashboard(item._id) }>Add To Dashboard </Button>
          <br></br>

                  
                </Card.Body>
              </Card>
            )
          })}

        </Container>
      </div>
      <div className="buttonclasses">
      <Show className="showClasses" condition={props.user.role==='instructor'}>
            <NavLink className="navLinkClasses" to="/addcourse">Add Course </NavLink>

        </Show>
        </div>
      </>
      
    );
    };
    
    
export default Classes;