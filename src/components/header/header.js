import React from 'react';
// import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import cookie from 'react-cookies';

const Header = (props) => {
  // console.log('fffffffffffffff' , props.userInfo);
  const user = cookie.load('user');
    return (
        <header>
        <h1>Header</h1>

        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/classes'>classes</NavLink></li>
          <li><NavLink to='/dashboard'>dashboard</NavLink></li>
          <li><NavLink to='/QandA'>Q&A</NavLink></li>
        </ul>
    <span>{user.username}</span>
    <img src={user.profile_img ? user.profile_img : 'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg'} />
        <button onClick={props.logout} >logout</button>
      </header>
    );
    };
   
    
export default Header;