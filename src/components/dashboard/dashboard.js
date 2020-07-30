import React from 'react';
import {useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import useCoursses from '../../hooks/coursses/coursses';
import cookie from 'react-cookies';

const Dashboard = (props) => {
    const [allcourses,getCoursses,addCourses,addToDashboard , getCoursesFromDashboard,dashboardCourses,delteCourse] = useCoursses(props.token);
    // console.log('props.dashboardCourses',props.userInfo);
  const user = cookie.load('user');

    useEffect(getCoursesFromDashboard, []);
    return (
        <>
        
            <h1>Dashboard</h1>

            <ul>
        <section>
        <img src={user.profile_img ? user.profile_img : 'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg'} />
          <p>username: {user.username}</p>
          <p>email:{user.email}</p>
          <p>role :{user.role}</p>
          <p>#joined courses :{dashboardCourses.length}</p>
          
        </section>
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
            </ul>
       
      </>
    );
    };
    
    
export default Dashboard;