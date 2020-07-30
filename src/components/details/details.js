import React from 'react';
import {useEffect} from 'react';
import ScriptTag from 'react-script-tag';

import { Link, NavLink ,withRouter,Route} from 'react-router-dom';
import mainVideo from '../mainVideo/mainVideo'
import AppointmentApp from '../AppointmentApp'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


import useCoursses from '../../hooks/coursses/coursses';
const Details = ({match ,token,history}) => {
    const [allcourses,getCoursses,addCourses,addToDashboard , getCoursesFromDashboard,dashboardCourses] = useCoursses(token);
    useEffect(getCoursesFromDashboard,[])
    let courseDetial = dashboardCourses.filter(i => i._id === match.params.id);

    
    const handelClick=()=>{
      history.push('/meeting')
    }


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
            <button onClick={handelClick} >Hammad 101 meeting</button>
            {/* <button><mainVideo/></button>
            <a >
            <mainVideo/>  
          </a> */}
          
          <Route exact path='/details/:id'>
                        <mainVideo  />
                    </Route>

             {/* <a href="https://this-fifo.github.io/jutsu/">add chat</a> */}
            <a >
            <div>
        <MuiThemeProvider>
          <AppointmentApp />
        </MuiThemeProvider>
      </div>  
          </a>
            
                     {/* <div>
        <MuiThemeProvider>
          <AppointmentApp />
        </MuiThemeProvider>
      </div>    */}

            </section>
            )
        })

        }
        </>
    );
    };
   
    
export default withRouter(Details);

