import React, { useState,useEffect } from 'react';
import {BrowserRouter,Route, NavLink, Router} from 'react-router-dom';
import { Redirect } from "react-router-dom";

//==================================()==================================\\

import useLogin from './hooks/auth/auth';
import useSignup from './hooks/auth/signup';
import Show from './components/show/';
import Login from  './components/signin/signin';
import Logout from  './components/signup/signup';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Classes from './components/classes/classes';
import Dashboard from './components/dashboard/dashboard';
import Dash from './components/dash/dash';
import AddCourse from './components/addcourse/addcourse'
import Details from './components/details/details'
// import useCoursses from './hooks/coursses/coursses';

//====================================================================\\

const App = (props) => {
const [loggedIn,user,login,logedout , tokenSigned] = useLogin();
const [signedUp,userSign,signup , logout ,token] = useSignup();
let check = false;
let log ;
let userInfo;
let mytoken;
if(loggedIn){
    check = loggedIn;
    log = logedout;
    userInfo = user;
    mytoken = tokenSigned;
    
}else if(signedUp){
    check = signedUp;
    log = logout;
    userInfo = userSign;
    mytoken = token;
}
// const [allcourses,getCoursses,addCourses,addToDashboard , getCoursesFromDashboard,dashboardCourses] = useCoursses(mytoken);
// useEffect(getCoursesFromDashboard, []);
// console.log('dashboardCourses' , dashboardCourses);

        return(
            <>
            <BrowserRouter>
            
            <Show condition={!check }>
                 <Redirect to="/" /> 
                <Login login={login}  ></Login>
                <Logout signup={signup} />
            </Show>

            <Show condition={check}>


            <Header user ={userInfo} logout={log} />

            <Route exact path='/'>
                <Home token={mytoken}  user ={userInfo} />
            </Route>

            <Route exact path='/classes'>
                <Classes token={mytoken}  user ={userInfo}/>
            </Route>

            <Route exact path='/dashboard'>
                <Dashboard  token={mytoken}  user ={userInfo}/>
            </Route>

            <Route exact path='/addcourse'>
                <AddCourse token={mytoken}  user ={userInfo}/>
            </Route>

            <Route exact path='/details/:id'>
                <Details token={mytoken}  user={userInfo}/>
            </Route> 

            <Footer/>

             </Show>

            </BrowserRouter>
             </>
        )
 
}
export default App;