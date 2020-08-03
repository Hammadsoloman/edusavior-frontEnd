import React from 'react';
import {storage} from  '../../firebase';

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
import Show from '../show';
const Addcourse = (props) => {
  const user = cookie.load('user');
  const [image ,setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [loading , setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [allcourses, getCoursses, addCourses] = useCoursses(props.token);
  const [oneClass, setClass] = useState({});

  const handleChange = (e) => {
    setClass({ ...oneClass, [e.target.name]: e.target.value });
  };
const handleFile = (e) =>{
  if (e.target.files[0]) {
    setImage(e.target.files[0]);
  }
}
  const handleSubmit = (e) => {
    e.preventDefault();
    let course = oneClass;
    course.instructor = user.username;
    course.instructor_img = user.profile_img

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
              course.img_url = url
              addCourses(course);
              props.history.push('/classes')
            })
        }
      );
    }else{
      course.img_url = 'https://www.onehappydog.com/wp-content/uploads/online-course-img.png'
      addCourses(course);
      props.history.push('/classes')
    }
   
  };

  return (
    <>
      <div className="backcolor" >
        <div className="addcourse">
          <Form className="addcourseForm" onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="label1">ADD COURSE</Form.Label><br></br>
            </Form.Group>
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
              <Form.Control className="inputaddcourse" type="date" name="start_date" onChange={handleChange} />
            </Form.Group>
            {/* ------------duration------------ */}
            <Form.Group className="label4">
              <Form.Label>Duration Time</Form.Label>
              <Form.Control className="inputaddcourse" type="time" name="literature_time" onChange={handleChange} />
            </Form.Group>
            {/* -----------add image from device---------- */}
            <Form.Group>
            <Form.File className="label7" label="add image from device" onChange={handleFile} />
            </Form.Group>
            <Show condition={loading}>
            <img src='https://thumbs.gfycat.com/SimilarPlumpBarasingha-max-1mb.gif' />
            </Show>
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