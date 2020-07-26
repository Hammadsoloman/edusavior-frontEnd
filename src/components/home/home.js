import React from 'react';
import {useEffect} from 'react';
// import './header.scss';
import useCoursses from '../../hooks/coursses/coursses';
// import { Link, NavLink } from 'react-router-dom';
const Home = (props) => {
  const [allcourses,getCoursses] = useCoursses(props.token);
  // getCoursses(props.token)
  useEffect(getCoursses, []);
console.log('allcourses',allcourses);
    return (
        <>
            <h1>home</h1>
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
      })}
    </ul>
      
      </>
    );
    };
    
    
export default Home;