import React from 'react';
import {useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import useCoursses from '../../hooks/coursses/coursses';
const Dashboard = (props) => {
    const [allcourses,getCoursses,addCourses,addToDashboard , getCoursesFromDashboard,dashboardCourses,delteCourse] = useCoursses(props.token);
    // console.log('props.dashboardCourses',props.dashboardCourses);
    useEffect(getCoursesFromDashboard, []);
    return (
        <>
        
            <h1>Dashboard</h1>
             {dashboardCourses.map(item=>{
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
          <button onClick={()=> delteCourse(item._id)}>X</button>
          <Link to={`details/${item._id}`}>View Details</Link>
          </li>
        )
      })}  
       
      </>
    );
    };
    
    
export default Dashboard;