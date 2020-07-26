import React from 'react';
import { useState , useEffect} from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();
const API = process.env.API_SERVER || 'https://edusavior-backend.herokuapp.com';
const SECRET = process.env.JWT_SECRET || 'mysecret';

//////////////======================(useSignup hook)=====================\\\\\\\\\\\\\\

const  useSignup  = () => {
    const [signedUp, setsignedUp] = useState(false);
    const [userSign , setUser] =  useState({});
    const [token , setToken] =  useState({});

////////////////////////////////

    const signup = (user) => {
        console.log('ffffffff' , user );
        axios({
            url:`${API}/signup`,
            method: 'post',
            mode: 'cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(user)
          })
            .then(response => {
        console.log('dddddddddddddd' , response.data.token );

                validateToken(response.data.token);
    
                })
            .catch(console.error);
    }

////////////////////////////////////

    const logout = () => {
        setSignupState(false, null, {});
      }; 

////////////////////////////////////  

    const  setSignupState = (signedUp, token, user) => {
        cookie.save('auth', token);
        setsignedUp(signedUp);
        setToken(token);
        setUser(user);
        // this.setState({ token, loggedIn, user });
      };

//////////////////////////////////

    const  validateToken = (token) => {
    try {

      const user = jwt.verify(token, SECRET);
      setSignupState(true, token, user);
    } catch (e) {
        setSignupState(false, null, {});
      console.log('Token validation Error', e.message);
    }
  };

return [signedUp,userSign,signup , logout ,token]
}

export default useSignup;
