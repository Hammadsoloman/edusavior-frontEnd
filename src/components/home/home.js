import React from 'react';
// import './header.scss';
import { Link, NavLink } from 'react-router-dom';
const Home = (props) => {
    return (
        <>
        
            <h1>home</h1>
    <p> Hello : {props.user.username}</p>
      
      </>
    );
    };
    
    
export default Home;