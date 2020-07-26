import React, { useState } from 'react';
import {BrowserRouter,Route, NavLink, Router} from 'react-router-dom';
import useLogin from './hooks/auth/auth';
import useSignup from './hooks/auth/signup'
import Show from './components/show/'   
import Login from  './components/signin/signin'
import Logout from  './components/signup/signup'
import Header from './components/header/header';
import Footer from './components/footer/footer'
import Home from './components/home/home'
import Classes from './components/classes/classes';
import Dashboard from './components/dashboard/dashboard'
import { Redirect } from "react-router-dom";
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
        return(
            <>
            <BrowserRouter>
            
            <Show condition={!check }>
                 <Redirect to="/signin" /> 
                <Login login={login}  ></Login>
                <Logout signup={signup} />
            </Show>
            {/* <Show condition={check }>
                 <Redirect to="/" /> 
            </Show> */}
            <Show condition={check}>
            <Header user ={userInfo} logout={log} />
            <Redirect to="/" /> 
            <Route exact path='/'>
                <Home token={mytoken}  user ={userInfo} />
            </Route>
            <Route exact path='/classes'>
                <Classes  user ={userInfo}/>
            </Route>
            <Route exact path='/dashboard'>
                <Dashboard  user ={userInfo}/>
            </Route>
            <Footer/>
             </Show>
            </BrowserRouter>
             </>
        )
 
}
export default App;