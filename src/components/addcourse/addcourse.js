import React from 'react';

import { useState, useEffect} from 'react';
import { Link, NavLink ,withRouter } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import useCoursses from '../../hooks/coursses/coursses';
import cookie from 'react-cookies';


const Addcourse = (props) => {
  const user = cookie.load('user');

    const [allcourses,getCoursses,addCourses] = useCoursses(props.token);
    
    const [oneClass , setClass] =  useState({});

    const handleChange = (e) => {
        setClass({...oneClass, [e.target.name]: e.target.value });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            // setClass({...oneClass, instructor_img})
            let course = oneClass;
            course.instructor = user.username;
            course.instructor_img = user.profile_img || 'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg';
            console.log('yyyyyyyyyyyyy' , course);
            addCourses(course);
            props.history.push('/classes')
          };

    return (
       <>
        <h1>add course</h1>
        <form onSubmit={handleSubmit}>  
            <input
              type="text"
              name="course_name"
              placeholder="Enter the course name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="instructor"
              hidden
              value={user.username}
              placeholder="instructor name"
              onChange={handleChange}
            />

            <input
              type="text"
              name="subject"
              placeholder="subject"
              onChange={handleChange}
            />

             <textarea
              type="text"
              name="description"
              placeholder="description"
              onChange={handleChange}
            />

            <input
              type="text"
              name="url"
              placeholder="course video url"
              onChange={handleChange}
            />

             <input
              type="text"
              name="img_url"
              placeholder="poster for the course"
              onChange={handleChange}
            />

            <input
              type="text"
              name="literature_time"
              placeholder="duration"
              onChange={handleChange}
            />
                <input
              type="text"
              name="room_id"
              placeholder="room_id"
              onChange={handleChange}
            />
               <input
              type="text"
              name="details"
              placeholder="details"
              onChange={handleChange}
            />
               <textarea
              type="text"
              name="details"
              placeholder="details"
              onChange={handleChange}
            />
             <input
              type="text"
              hidden
              value={user.profile_img ? user.profile_img : 'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg'}
              name="instructor_img"
              placeholder="instructor img"
              onChange={handleChange}
            />

             <input
              type="text"
              name="start_date"
              placeholder="start date"
              onChange={handleChange}
            />


            <button>ADD COURSE</button>
          
        </form>
        </>
    );
    };
   
    
export default withRouter(Addcourse);