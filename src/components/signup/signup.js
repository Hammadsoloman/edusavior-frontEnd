import React from 'react';
import { useState , useEffect} from 'react';

// import Show from '../show/';

import { Link, NavLink } from 'react-router-dom';

const Signup = (props) => {

 const [user , setuser] =  useState({});

 const handleChange = (e) => {
  setuser({...user, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.signup(user);
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
        
      </>
    );
  
}

export default Signup;
