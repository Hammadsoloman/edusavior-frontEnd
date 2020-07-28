import React from 'react';
import {useEffect} from 'react';

import { Link, NavLink ,withRouter} from 'react-router-dom';

import useCoursses from '../../hooks/coursses/coursses';
const Details = ({match ,token}) => {
    const [allcourses,getCoursses,addCourses,addToDashboard , getCoursesFromDashboard,dashboardCourses] = useCoursses(token);
    useEffect(getCoursesFromDashboard,[])
    let courseDetial = dashboardCourses.filter(i => i._id === match.params.id);
    return (
        <>
        <h1>Details</h1>
        <Link to="/dashboard" >back to dashboard</Link>
        {courseDetial.map(item=>{
            return(
                <section>
            <iframe width="1080" height="615" src={`${item.url}`}
             frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
              </iframe>
              <br/>
            <span>Course Name: {item.course_name}</span>
            <br/>
            <span>subject: {item.subject}</span>
            <br/>
            <p>description: {item.description}</p>
            <p>Duration: {item.literature_time}</p>
            <button>Hammad 101 meeting</button>
            </section>
            )
        })

        }
        </>
    );
    };
   
    
export default withRouter(Details);

