import React, { Component } from "react";
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';
import Show from '../show/index'
import cookie from 'react-cookies';

const  ListAppointments = (props) => {
  const user = cookie.load('user');
 
    return (
        <div>
        {props.appointments.map( item => (
            <div key={item._Id}>
            <div >
              <Show condition={item.studentName == user.username}>

        <button  onClick={()=> props.deleteAppointment(item._id)}><FaTimes/></button>
              </Show>
            </div>
  
            <div >
              <div >
                <span >{item.studentName}</span>
                <span >
                    <Moment 
                        date={item.date}
                        parse="YYYY-MM-dd hh:mm"
                        format="MMM-D h:ma"    
                    />
                </span>
              </div>
  
              <div >
                <span >Instructor: </span>
                <span>{item.instructorName}</span>
              </div>
              <div >{item.notes}</div>
            </div>
          </div>
        ))}        
    </div>
    )
  }

export default ListAppointments;
