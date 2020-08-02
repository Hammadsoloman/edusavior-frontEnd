import React, { Component } from 'react';

const  SearchAppointments = (props) => {
  
    return (
      
        <div >
          <div >
            <input
              id="SearchApts"
              type="text"
              aria-label="Search Appointments"
              onChange={e => { props.searchApts(e.target.value) }}
            />
            
            </div>
          </div>
     
     
    )
  
}
export default SearchAppointments;