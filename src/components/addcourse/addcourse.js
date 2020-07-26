import React from 'react';

import { useState, useEffect} from 'react';
import { Link, NavLink ,withRouter } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import useCoursses from '../../hooks/coursses/coursses';


const Addcourse = (props) => {
    const [allcourses,getCoursses,addCourses] = useCoursses(props.token);
    
    const [oneClass , setClass] =  useState({});

    const handleChange = (e) => {
        setClass({...oneClass, [e.target.name]: e.target.value });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            addCourses(oneClass);
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
              name="subject"
              placeholder="subject"
              onChange={handleChange}
            />

             <input
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

            <button>ADD COURSE</button>
          
        </form>
        </>
    );
    };
   
    
export default withRouter(Addcourse);