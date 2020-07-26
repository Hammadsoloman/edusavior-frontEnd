import React from 'react';
import { useState } from 'react';
import superagent from 'superagent';
const API = process.env.API_SERVER || 'https://edusavior-backend.herokuapp.com';


const  useCoursses  = (token) => {
  
    const [allcourses, setAllcourses] = useState([]);


    const getCoursses =   () => {
    //   console.log(token);
        superagent
      .get(`${API}/allCourses`)
      .set('authorization', `Bearer ${token}`)
      .then((response) => {
        //   console.log('sssssssss', response.body.allCourses);
          setAllcourses(response.body.allCourses);
        // validateToken(response.body);
      })
      .catch(console.error);
    }
    // console.log('allcourses' , allcourses);
    return [allcourses,getCoursses]



}

export default useCoursses;











// login = (username, password) => {
//     superagent
//       .post(`${API}/signin`)
//       .set('authorization', `Basic ${btoa(`${username}:${password}`)}`)
//       .then((response) => {
//         this.validateToken(response.body.token);
//       })
//       .catch(console.error);
//   };