import React, { Component } from 'react';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa'
import cookie from 'react-cookies';

const AddAppointments = (props) => {
  const [oneAppointments, setMyAppointments] = useState({});
  const user = cookie.load('user');

  const handleChange = (e) => {
    setMyAppointments({ ...oneAppointments, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      studentName: user.username,
      instructorName: oneAppointments.instructorName,
      date: oneAppointments.date + ' ' + oneAppointments.aptTime,
      notes: oneAppointments.notes
    }
    props.addAppointment(obj);
  };



  return (
    <div >
      <div  >
        <FaPlus /> Add Appointment
            </div>

      <div >
        <form noValidate onSubmit={handleSubmit}>
          {/* <div >
            <label
              htmlFor="studentName"
              readOnly
            >
              Student Name
                  </label>
            <div >
              <input
                type="text"
                className="form-control"
                name="studentName"
                placeholder="student's Name"
                onChange={handleChange}
              />
            </div>
          </div> */}

          <div >
            <label

              htmlFor="instructorName"
            >
              instructor Name
                  </label>
            <div >
              <input
                type="text"
                name="instructorName"
                placeholder="instructor's Name"
                onChange={handleChange}
              />
            </div>
          </div>

          <div >
            <label

              htmlFor="aptDate"
            >
              Date
                  </label>
            <div >
              <input
                type="date"

                name="date"
                id="aptDate"

                onChange={handleChange}
              />
            </div>
            <label

              htmlFor="aptTime"
            >
              Time
                  </label>
            <div >
              <input
                type="time"
                name="aptTime"
                id="aptTime"

                onChange={handleChange}
              />
            </div>
          </div>

          <div >
            <label htmlFor="aptNotes">
              Apt. Notes
                  </label>
            <div >
              <textarea

                rows="4"
                cols="50"
                name="notes"
                id="aptNotes"
                placeholder="Appointment Notes"

                onChange={handleChange}
              />
            </div>
          </div>

          <div >
            <div >
              <button
                type="submit"

              >
                Add Appointment
                    </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

}
export default AddAppointments;