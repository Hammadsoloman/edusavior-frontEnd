import React from 'react';
import {useEffect} from 'react';
import Show from '../show/index'
// import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import useCoursses from '../../hooks/coursses/coursses';

const Classes = (props) => {
    const [allcourses,getCoursses,addCourses,addToDashboard] = useCoursses(props.token);
    useEffect(getCoursses, []);

    return (
        <>
       
            <h1>classes</h1>
            <ul>
      
      {allcourses.map(item=>{
        return (
        <li key={item._id}>
          <img src={item.img_url}/>
          <br/>
          <span>course: {item.course_name}</span> 
          <br/>
          <span>Course duration: {item.literature_time} </span> 
          <br/>
          <span>{item.subject}   instructor: {item.instructor}</span> 
          <br/>
          <p>{item.description}</p>
          <button onClick={()=> addToDashboard(item._id) }>Add To Dashboard</button>
          </li>
        )
      })}
    </ul>

        <Show condition={props.user.role==='instructor'}>
            <NavLink to="/addcourse">add course</NavLink>
        </Show>
       
      </>
    );
    };
    
    
export default Classes;