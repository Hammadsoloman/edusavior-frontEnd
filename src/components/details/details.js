import React from 'react';
import {useEffect} from 'react';

import { Link, NavLink ,withRouter} from 'react-router-dom';

import useCoursses from '../../hooks/coursses/coursses';
const Details = ({match ,token}) => {
    const [allcourses,getCoursses,addCourses,addToDashboard , getCoursesFromDashboard,dashboardCourses] = useCoursses(token);
    useEffect(getCoursesFromDashboard,[])
    let courseDetial = dashboardCourses.filter(i => i._id === match.params.id);
    console.log(',,,,,,,,,,,,,,,,,,,,,,,,' , courseDetial);
    return (
        <>
        <h1>Details</h1>
        <Link to="/dashboard" >back to dashboard</Link>
        {courseDetial.map(item=>{
            return(
                <section>
            
            <img src={item.instructor_img}/>
            <br/>
            <span>instructor Name: {item.instructor}</span>
            <br/>
            <span>Course Name: {item.course_name}</span>
            <br/>
            <span>subject: {item.subject}</span>
            <br/>
            <p>description: {item.description}</p>
            <p>Duration: {item.literature_time}</p>
            <p>details: {item.details}</p>
            <p>start Date: {item.start_date}</p>
            <p>room_id: {item.room_id}</p>
            <button>Hammad 101 meeting</button>
            </section>
            )
        })

        }
        </>
    );
    };
   
    
export default withRouter(Details);

