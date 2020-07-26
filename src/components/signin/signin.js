import React from 'react';
import { useState , useEffect} from 'react';

import { Link, NavLink,withRouter } from 'react-router-dom';

const Login = (props) => {

 const [user , setuser] =  useState({});

 const handleChange = (e) => {
  setuser({...user, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    props.login(user.username, user.password);
    props.history.push('/')
  };
  

    return (
      <>
          <span>Sign in</span>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
            />
            <button>Login</button>
          </form>
        
      </>
    );
  
}

export default withRouter(Login);
