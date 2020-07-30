import React from 'react';
import { useState } from 'react';
import superagent from 'superagent';
const API = process.env.API_SERVER || 'https://edusavior-backend.herokuapp.com';


const  useQuestion  = (token) => {
  
    const [allQuestions, setQuestions] = useState([]);
    // const [dashboardCourses, setDashboardCourses] = useState([]);
    const getQuestions =   () => {
        superagent
      .get(`${API}/getQuestions`)
      .set('authorization', `Bearer ${token}`)
      .then((response) => {
          console.log('kkkkkkkk' , response.body);
        setQuestions(response.body);
      })
      .catch(console.error);
    }

    const addCQuestion = ( body,username) =>{
        // console.log('boody' , body , 'userrr' ,username );
      superagent
      .post(`${API}/addQuestion/${username}`)
      .set('authorization', `Bearer ${token}`)
      .send(body)
      .then((response) => {
        console.log('response.body' ,response.body);
        setQuestions([...allQuestions,response.body])
      })
      .catch(console.error);
    }

  const delteQuestion = (id) =>{
    superagent
    .delete(`${API}/deleteQuestion/${id}`)
    .set('authorization', `Bearer ${token}`)
    .then((response) => {
      let arr = allQuestions.filter(listItem => listItem._id != id );
      setQuestions(arr);
    })
    .catch(console.error);
  }

  const addAnswer = (body , id , username) =>{
    superagent
    .post(`${API}/addAnswer/${id}/${username}`)
    .set('authorization', `Bearer ${token}`)
    .send(body)
    .then((response) => {
      setQuestions(allQuestions.map(val => val._id === id ? response.body : val))
    })
    .catch(console.error);
  }
  const delteAnswer = (qid , aid) =>{
    superagent
    .delete(`${API}/deleteAnswer/${qid}/${aid}`)
    .set('authorization', `Bearer ${token}`)
    .then((response) => {
    //   let arr = allQuestions.filter(listItem => listItem._id != id );
    //   setQuestions(arr);
    setQuestions(allQuestions.map(val => val._id === qid ? response.body : val))

    
    })
    .catch(console.error);
  }

    
    return [ allQuestions,getQuestions,addCQuestion,delteQuestion ,addAnswer , delteAnswer]
}

export default useQuestion;
