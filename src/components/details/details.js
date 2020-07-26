import React from 'react';
import {useEffect} from 'react';
// import './header.scss';
import { Link, NavLink ,withRouter} from 'react-router-dom';
import { Redirect } from "react-router-dom";
import useCoursses from '../../hooks/coursses/coursses';
const Details = ({match ,token}) => {
    const [allcourses,getCoursses,addCourses,addToDashboard , getCoursesFromDashboard,dashboardCourses] = useCoursses(token);
    useEffect(getCoursesFromDashboard,[])
    console.log('match.params.id' , match.params.id );
    console.log('dashboardCourses' , dashboardCourses );
    let courseDetial = dashboardCourses.filter(i => i._id === match.params.id);
    console.log('courseDetial' , courseDetial);
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


// {
//     "_id": {
//         "$oid": "5f1da08254d56a00172f6e40"
//     },
//     "quiz": [],
//     "course_name": "botany",
//     "subject": "biology",
//     "description": "Hank talks about the molecules that make up every living thing - carbohydrates, lipids, and proteins - and how we find them in our environment and in the food that we eat.  ",
//     "url": "https://www.youtube.com/embed/YI3tsmFsrOg",
//     "img_url": "https://i.ytimg.com/vi/H8WJ2KENlK0/maxresdefault.jpg",
//     "literature_time": "10 : 00 AM",
//     "__v": 0
// }