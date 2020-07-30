import React from 'react';
import {useEffect} from 'react';
import cookie from 'react-cookies';

// import './header.scss';
import useCoursses from '../../hooks/coursses/coursses';
// import { Link, NavLink } from 'react-router-dom';
const Home = (props) => {
  const token = cookie.load('auth');
  const [allcourses,getCoursses] = useCoursses(token);
  // getCoursses(props.token)
  useEffect(getCoursses, []);
console.log('allcourses',allcourses);
const handleSubmit = (e) =>{}
    return (
        <>
            <h1>home</h1>
            <form onSubmit={()=>handleSubmit()}>
              <button>see some courses</button>
            </form>
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
          </li>
        )
      }).slice(0,4)}
    </ul>
      
      </>
    );
    };
    
    
export default Home;