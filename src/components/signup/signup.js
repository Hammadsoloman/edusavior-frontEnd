import React from 'react';
import { useState, useEffect } from 'react';
import '../signup/signup.scss'
import { Link, NavLink, withRouter } from 'react-router-dom';
import useSignup from '../../hooks/auth/signup';

const Signup = (props) => {

  const [user, setuser] = useState({});
  const [signup] = useSignup();
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    signup(user);
    props.history.push('/')
  };
  return (
    <>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="signin"><span>Sign up</span></div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                className="sgininForm" id="nme"
                autocomplete="off" required
                onChange={handleChange}
              />
              <label for="nme"><span>Username</span></label>
              <input
                name="password" className="sgininForm" id="msg" required
                type="password" autocomplete="off"
                onChange={handleChange}
              />
              <label for="msg"><span>Password</span></label>
              <input
                name="email" className="sgininForm" id="mail" required
                type="text" autocomplete="off"
                onChange={handleChange}
              />
              <label for="mail"><span>Email</span></label>
              <div className="select-wrapper">
                <select className="select" name="role" onChange={handleChange}>
                  <option selected disabled>Choose your role</option>
                  <option value='student'>student</option>
                  <option value='instructor'>instructor</option>
                </select>
              </div>
              <button className="button button0">Signup</button>
              <button className="button button9"><Link className="button03" to="/">Signin</Link></button>
            </form>
            

          </div>
        </nav>

      </div>
      <img className="img1" src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Girl in a jacket" ></img>
      <p className="paragraph">Welcome to the Edusavior</p>
    </>
  );

}

export default withRouter(Signup);
