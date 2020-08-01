import React from 'react';
import { useEffect, useState } from 'react';
import './details.scss';
import { Jutsu } from 'react-jutsu'
import { Link, NavLink, withRouter } from 'react-router-dom';
import cookie from 'react-cookies';

import useCoursses from '../../hooks/coursses/coursses';
const Details = ({ match, token }) => {
    const [room, setRoom] = useState('')
    const [name, setName] = useState('')
    const [call, setCall] = useState(false)
    const [password, setPassword] = useState('')
    const user = cookie.load('user');
    const handleClick = event => {
        event.preventDefault()
        if (room && user.username) setCall(true)
    }
    const [allcourses, getCoursses, addCourses, addToDashboard, getCoursesFromDashboard, dashboardCourses] = useCoursses(token);
    useEffect(getCoursesFromDashboard, [])
    let courseDetial = dashboardCourses.filter(i => i._id === match.params.id);

    return (
        <>
            <h1>Details</h1>
            <Link to="/dashboard" >back to dashboard</Link>
            {courseDetial.map(item => {
                return (
                    <section>

                        <img src={item.instructor_img} />
                        <br />
                        <span>instructor Name: {item.instructor}</span>
                        <br />
                        <img src={item.img_url} />
                        <span>Course Name: {item.course_name}</span>
                        <br />
                        <span>subject: {item.subject}</span>
                        <br />
                        <p>description: {item.description}</p>
                        <p>Duration: {item.literature_time}</p>
                        <p>details: {item.details}</p>
                        <p>start Date: {item.start_date}</p>
                        <p>room_id: {item.room_id}</p>
                        <button>Hammad 101 meeting</button>
                    </section>
                )
            })

            }
            <div>
                <h2>edusavior</h2>
                {call ? (<Jutsu
                    roomName={room}
                    password={password}
                    displayName={user.username}
                    onMeetingEnd={() => console.log('Meeting has ended')}
                    loadingComponent={<p>ʕ •ᴥ•ʔ edusavior is loading ...</p>} />)
                    : (
                        <form>
                            <input id='room' type='text' placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
                            <input id='password' type='text' placeholder='Password (optional)' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button onClick={handleClick} type='submit'>
                                Start / Join
            </button>
                        </form>
                    )}
            </div>
        </>
    );
};


export default withRouter(Details);

