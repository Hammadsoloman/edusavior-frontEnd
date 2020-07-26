// import React from 'react';
// // import './header.scss';
// import {useEffect} from 'react';
// import {BrowserRouter,Route, NavLink, Router} from 'react-router-dom';
// import { Redirect } from "react-router-dom";
// import Dashbooard from '../dashboard/dashboard';
// import Details from '../details/details';
// import useCoursses from '../../hooks/coursses/coursses';
// const Header = (props) => {
//     const [allcourses,getCoursses,addCourses,addToDashboard , getCoursesFromDashboard,dashboardCourses] = useCoursses(props.token);
//     useEffect(getCoursesFromDashboard, []);
// console.log('dashboardCourses' , dashboardCourses);
//     return (
//         <>
//         <BrowserRouter>


//         <Route strict exact path="/">
//         <Dashbooard dashboardCourses={dashboardCourses} />
//         </Route>


//         <Route  exact path="/details/:id">
//         <Details dashboardCourses={dashboardCourses} />
//         </Route>


//         </BrowserRouter>
//         </>
//     );
//     };
   
    
// export default Header;