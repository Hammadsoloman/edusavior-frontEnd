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
const [loggedIn,user,login,logedout] = useLogin();
const [signedUp,userSign,signup , logout] = useSignup();
let check = false;
let log ;
let userInfo;
if(loggedIn){
    check = loggedIn;
    log = logedout;
    userInfo = user;
}else if(signedUp){
    check = signedUp;
    log = logout;
    userInfo = userSign;
}
        return(
            <>
            <BrowserRouter>
            
            <Show condition={!check }>
                 {/* <Redirect to="/" />  */}
                <Login login={login}  ></Login>
                <Logout signup={signup} />
            </Show>
            
            <Show condition={check}>
            <Header user ={userInfo} logout={log} />
            <Route exact path='/'>
                <Home  user ={userInfo} />
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