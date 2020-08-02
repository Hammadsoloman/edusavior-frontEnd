import React from 'react';

import { useState, useEffect } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import useCoursses from '../../hooks/coursses/coursses';
import cookie from 'react-cookies';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import '../addcourse/addcourse.scss'
const Addcourse = (props) => {
  const user = cookie.load('user');

  const [allcourses, getCoursses, addCourses] = useCoursses(props.token);

  const [oneClass, setClass] = useState({});

  const handleChange = (e) => {
    setClass({ ...oneClass, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setClass({...oneClass, instructor_img})
    let course = oneClass;
    course.instructor = user.username;
    course.instructor_img = user.profile_img || 'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg';
    console.log('yyyyyyyyyyyyy', course);
    addCourses(course);
    props.history.push('/classes')
  };

  return (
    <>
      <div className="backcolor" >
        <div className="addcourse">
          <Form className="addcourseForm" onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="label1">ADD COURSE</Form.Label><br></br>
            </Form.Group>
            {/* <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Text>{user.username} </Form.Text>
  </Form.Group> */}
            <Form.Group className="label2 label6">
              <Form.Text>Enter all the following:</Form.Text>
            </Form.Group>
            {/* ------------subject------------- */}
            <Form.Group className="label3">
              <Form.Label>Subject</Form.Label>
              <Form.Control className="inputaddcourse" type="text" name="subject" placeholder="subject" onChange={handleChange} />
            </Form.Group>
            {/* ------------course name ------------- */}
            <Form.Group className="label4">
              <Form.Label>Course Name</Form.Label>
              <Form.Control className="inputaddcourse" type="text" placeholder="Enter the course name" name="course_name" onChange={handleChange} />
            </Form.Group>
            {/* ------------start date------------- */}
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Start Date</Form.Label>
              <Form.Control className="inputaddcourse" type="date" name="start_date"  onChange={handleChange} />
            </Form.Group>
            {/* ------------duration------------ */}
            <Form.Group className="label4">
              <Form.Label>Duration Time</Form.Label>
              <Form.Control className="inputaddcourse" type="time" name="literature_time"  onChange={handleChange} />
            </Form.Group>
            {/* ------------Image Address------------- */}
            <Form.Group>
              <InputGroup className="label4 label5">
                <InputGroup.Prepend>
                  <InputGroup.Text>Image Address</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control className="inputaddcourse" id="inlineFormInputGroup" type="text" name="img_url" placeholder="poster for the course" onChange={handleChange} />
              </InputGroup>
            </Form.Group>
            {/* --------description----------- */}
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control className="inputaddcourse" as="textarea" rows="3" type="text" name="description" placeholder="description ..." onChange={handleChange} />
            </Form.Group>
            {/* --------details----------- */}
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Detalis</Form.Label>
              <Form.Control className="inputaddcourse" as="textarea" rows="3" type="text" name="details" placeholder="details ..." onChange={handleChange} />
            </Form.Group>


            {/* --------button--------- */}
            <Button className="addcoursebtn" type="submit">add to classes</Button>
          </Form>
        </div>
      </div>
    </>
  );
};


export default withRouter(Addcourse);