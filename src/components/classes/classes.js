import React from 'react';
import {useEffect} from 'react';
import Show from '../show/index'
// import './header.scss';
import useCoursses from '../../hooks/coursses/coursses';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Image from 'react-bootstrap/Image';
import { Link, NavLink } from 'react-router-dom';
import '../../components/classes/classes.scss';



const Classes = (props) => {
    const [allcourses,getCoursses,addCourses,addToDashboard] = useCoursses(props.token);
    useEffect(getCoursses, []);

    return (
        <>
       <div className="classes">
        <h3 className="CLASSES">
          OUR CLASSES
      </h3>
        <hr></hr>
        <Container>

          {allcourses.map(item => {
            return (
              <Card style={{ width: '18rem' }} key={item._id}>
                <Card.Img variant="top" src={item.img_url} />
                <Card.Body>
                  <Card.Text className="subj1">
                    {item.subject}
                  </Card.Text>
                  <Card.Title className="textclasses">course name: <span className="nonBold">{item.course_name}</span> 
                  </Card.Title>
                  <Card.Text className="textclasses">
                  <span className="spanpar">Course duration: </span>  {item.literature_time}
                  </Card.Text>
                  <Card.Text className="textclasses">
                  <span className="spanpar"> instructor name:</span> {item.instructor}
                  </Card.Text>
                  {/* <Collapse className="textclasses" in={item.show}>
                    <div className={`show-${item.show.toString()}`} id="example-collapse-text">
                      {item.description}
                    </div>

                  </Collapse> */}
                  <p className="textclasses"><span className="spanpar">Course description:</span><br></br> {item.description} </p>
                  <Button
                    className="adtodashbtn"
                    onClick={()=> addToDashboard(item._id) }
                    // aria-controls="example-collapse-text"
                    // aria-expanded={item.show}
                  >
                    Add To Dashboard
                  </Button>
          <br></br>

                  
                </Card.Body>
              </Card>
            )
          })}

        </Container>
      </div>
      <Show className="showClasses" condition={props.user.role==='instructor'}>
            <NavLink className="navLinkClasses" to="/addcourse">Add Course </NavLink>
        </Show>
      </>
      
    );
    };
    
    
export default Classes;