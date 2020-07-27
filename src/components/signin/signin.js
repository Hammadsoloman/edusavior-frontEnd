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
            <div className="signin"><span >Sign in</span></div>
            
            <form onSubmit={handleSubmit}>
              
                <input
                type="text" name="name" class="question" id="nme" required autocomplete="off" 
                // type="text"
                // name="username"
                // placeholder="Enter Username"
                // required
                onChange={handleChange}
              />
              <label for="nme"><span>Username</span></label>
              
              <input
            name="message" class="question" id="msg" required autocomplete="off"
                // type="password"
                // name="password"
                // placeholder="Enter Password"
                // required
                onChange={handleChange}
              />
              <label for="msg"><span>Password</span></label>
              <button>Login</button>
            </form>
            <span>don't have an account! <Link to="/signup">signup</Link></span>
          </div>
        </nav>
      </div>

    </>
  );

}

export default withRouter(Login);
