import React from 'react';
import { useState, useEffect } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import '../signin/signin.scss'
const Login = (props) => {

  const [user, setuser] = useState({});

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(user.username, user.password);
    props.history.push('/')
  };


  return (
    <>

      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="signin"><span >Log-In</span><p>Please login with your username and password!</p>
            </div>
            
            {/* <form onSubmit={handleSubmit}>
              <label>Username</label>
                <input
                type="text"
                name="username"
                placeholder="Enter Username"
                onChange={handleChange}
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={handleChange}
              />
              <button>Login</button>
            </form> */}
            
            <form onSubmit={handleSubmit}>
             
                <input
                type="text" name="username" className="sgininForm" id="nme" required 
                onChange={handleChange} autocomplete="off"
              /> <label for="nme"><span>Username</span></label>
              
              <input
               name="password" className="sgininForm" id="msg" required 
               type="password"
                onChange={handleChange} autocomplete="off"
              />
              <label for="msg"><span>Password</span></label>
            <button className="button button1">Login</button>
            <button className="button button2"><Link className="button3" to="/signup" >Signup</Link></button>
            </form> 
            <h1>OR</h1>
            <button className="button7 button4"><Link className="button6" to="#" >Google</Link></button>
            <button className="button7 button5"><Link  className="button6" to="#" >LinkedIn</Link></button>
           {/* <img src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Girl in a jacket" width="500" height="600" fixed></img> */}
            {/* <span>Don't have an account?</span> */}
          </div>
        </nav>
      </div>
      <img src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Girl in a jacket" ></img>
      <p className="paragraph">Welcome to the Edusavior</p>

    </>
  );

}

export default withRouter(Login);
