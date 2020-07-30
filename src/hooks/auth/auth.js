import React from 'react';
import { useState , useEffect} from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import superagent from 'superagent';
dotenv.config();
const API = process.env.API_SERVER || 'https://edusavior-backend.herokuapp.com';
const SECRET = process.env.JWT_SECRET || 'mysecret';

//////////////======================(useLogin hook)=====================\\\\\\\\\\\\\\

const  useLogin  = () => {
  
    const [loggedIn, setLoggedIn] = useState(false);
    const [user , setUser] =  useState({});
    const [userInfo , setUserInfo] = useState({});
    const [tokenSigned , setToken] =  useState({});

////////////////////////////////

    const login = (username, password) => {
      console.log(username, password);
        superagent
      .post(`${API}/signin`)
      .set('authorization', `Basic ${btoa(`${username}:${password}`)}`)
      .then((response) => {
        if(response.body.token){
          console.log('userrrrrrrr' , response.body.user);
          // setUserInfo(response.body.user)
          cookie.save('user', response.body.user)
          validateToken(response.body.token);
        }else{
          setUser(response.body.user)
        }
      })
      .catch(console.error);
    }

////////////////////////////////////

    const logedout = () => {
        setLoginState(false, null, {});
      }; 

////////////////////////////////////    

    const  setLoginState = (loggedIn, token, user) => {
        cookie.save('auth', token);
        setLoggedIn(loggedIn);
        setToken(token);
        setUser(user);
      };

//////////////////////////////////

    const  validateToken = (token) => {
    try {

      const user = jwt.verify(token, SECRET);
      setLoginState(true, token, user);
    } catch (e) {
      setLoginState(false, null, {});
      console.log('Token validation Error', e.message);
    }
  };

///////////////////////////////////////

useEffect(()=>{
  const token = cookie.load('auth');
  const user = cookie.load('user');
  validateToken(token);
},[]);


///////////////////////////////////////

return [loggedIn,user,login,logedout,tokenSigned ,userInfo]

}

export default useLogin;
