import React, { Component, useEffect } from 'react';
import AddAppointments from './AddAppointments';
import ListAppointments from './ListAppointments';
import SearchAppointments from './SearchAppointments';
import useAppointment from '../../hooks/appointment/appointment'
// import '../css/App.css';
import cookie from 'react-cookies';
import {without} from 'lodash';

const App   = (props) => {
  const token = cookie.load('auth');

const  {myAppointments,querytext,getAppoinments,addAppoinments , delteAppointment,searchApts}  = useAppointment(token)
  
useEffect(getAppoinments,[])
 let filteredApts = myAppointments.filter(eachItem => {
      return (
        eachItem['studentName']
        .toLowerCase()
        .includes(querytext.toLowerCase()) ||
        eachItem['instructorName']
        .toLowerCase()
        .includes(querytext.toLowerCase()) ||
        eachItem['notes']
        .toLowerCase()
        .includes(querytext.toLowerCase()) 
      )
    })


    return (
      <main>
      <div >
        <div >
          <div >
            <div >
              
              <AddAppointments  addAppointment={addAppoinments}/>
              <ListAppointments 
                appointments={filteredApts} 
                deleteAppointment={delteAppointment}                  
              />

            </div>
          </div>
        </div>
      </div>
    </main>
    );
  
}

export default App;
