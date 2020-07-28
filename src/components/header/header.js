import React from 'react';
// import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import { Redirect } from "react-router-dom";
const Header = (props) => {
    return (
        <header>
        <h1>Header</h1>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/classes'>classes</NavLink></li>
          <li><NavLink to='/dashboard'>dashboard</NavLink></li>
          <li><NavLink to='/QandA'>Q&A</NavLink></li>
        </ul>
        <button onClick={props.logout} >logout</button>
      </header>
    );
    };
   
    
export default Header;