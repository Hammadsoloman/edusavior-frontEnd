import React from 'react';
import { useState } from 'react';
import superagent from 'superagent';
const API = process.env.API_SERVER || 'https://edusavior-backend.herokuapp.com';


const  useCoursses  = (token) => {
  
    const [allcourses, setAllcourses] = useState([]);
    const [dashboardCourses, setDashboardCourses] = useState([]);
    const getCoursses =   () => {
        superagent
      .get(`${API}/allCourses`)
      .set('authorization', `Bearer ${token}`)
      .then((response) => {
          setAllcourses(response.body.allCourses);
      })
      .catch(console.error);
    }

    const addCourses = (course) =>{
      superagent
      .post(`${API}/addCourse`)
      .set('authorization', `Bearer ${token}`)
      .send(course)
      .then((response) => {
          console.log('sssssssss', response.body);
      })
      .catch(console.error);
    }
    const addToDashboard = (id) =>{
      console.log('iddd' , id);
      superagent
      .post(`${API}/addCoursetodashboard/${id}`)
      .set('authorization', `Bearer ${token}`)
      .then((response) => {
        let addedCourse = response.body.courses[response.body.courses.length -1];
        setDashboardCourses([...dashboardCourses,addedCourse])
      })
      .catch(console.error);
    }
    const getCoursesFromDashboard =   () => {
      
      superagent
    .get(`${API}/getCoursetodashboard`)
    .set('authorization', `Bearer ${token}`)
    .then((response) => {
      console.log(response.body.courses ,'response.body.courses');
      setDashboardCourses(response.body.courses);
    })
    .catch(console.error);
  }

  const delteCourse = (id) =>{
    superagent
    .delete(`${API}/deleteCoursetodashboard/${id}`)
    .set('authorization', `Bearer ${token}`)
    .then((response) => {
      console.log('done' , id);
      let arr = dashboardCourses.filter(listItem => listItem._id != id );
      setDashboardCourses(arr);
    })
    .catch(console.error);
  }

    
    return [allcourses,getCoursses,addCourses,addToDashboard , getCoursesFromDashboard,dashboardCourses,delteCourse]
}

export default useCoursses;
