import React from 'react';
import { useState } from 'react';
import superagent from 'superagent';
const API = process.env.API_SERVER || 'https://edusavior-backend.herokuapp.com';


const  useAppoinment  = (token) => {
  
    const [myAppointments, setMyAppointments] = useState([]);
    const [querytext , setQuerytext] = useState('');

    const getAppoinments =   () => {
          superagent
        .get(`${API}/getAppointments`)
        .set('authorization', `Bearer ${token}`)
        .then((response) => {
         setMyAppointments(response.body.allAppointemants)  
          })
        .catch(console.error);
      }

    const addAppoinments = (appointment) =>{
      superagent
      .post(`${API}/addAppointments`)
      .set('authorization', `Bearer ${token}`)
      .send(appointment)
      .then((response) => {
          console.log('fffffffffffff' ,response.body );
        setMyAppointments([...myAppointments,response.body])
      })
      .catch(console.error);
    }


  const delteAppointment = (id) =>{
    superagent
    .delete(`${API}/deleteAppointments/${id}`)
    .set('authorization', `Bearer ${token}`)
    .then((response) => {
      let arr = myAppointments.filter(listItem => listItem._id != id );
      setMyAppointments(arr);
    })
    .catch(console.error);
  }

const  searchApts = (query) =>{
    setQuerytext(query);
  }

    
    return {myAppointments,querytext,getAppoinments,addAppoinments , delteAppointment,searchApts ,setMyAppointments}
}

export default useAppoinment;
