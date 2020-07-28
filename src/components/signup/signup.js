import React from 'react';
import { useState , useEffect} from 'react';

// import Show from '../show/';

import { Link, NavLink,withRouter } from 'react-router-dom';
import useSignup from '../../hooks/auth/signup';

const Signup = (props) => {

 const [user , setuser] =  useState({});
 const [signup] = useSignup();
 const handleChange = (e) => {
  setuser({...user, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    signup(user);
    props.history.push('/')
  };
    return (
      <>
          <span>Sign up</span>
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
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
            <select name="role" onChange={handleChange}>
            <option selected disabled>Choose your role</option>
                <option value='student'>student</option>
                <option value='instructor'>instructor</option>
            </select>
            <button>Signup</button>
          </form>
          <span>back to <Link to="/">signin</Link></span>
        
      </>
    );
  
}

export default withRouter(Signup);
