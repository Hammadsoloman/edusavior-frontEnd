import React from 'react';
import { useEffect, useState } from 'react';
import './details.scss';
import { Jutsu } from 'react-jutsu';
import { Link, NavLink, withRouter } from 'react-router-dom';
import cookie from 'react-cookies';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import Card from 'react-bootstrap/Card';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Form, Col } from 'react-bootstrap';
import { MDBInput } from "mdbreact";



import Button from 'react-bootstrap/Button';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

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
            <SideNav
                onSelect={(selected) => {
                    // Add your code here
                }}
            >
                <SideNav.Toggle>
                    <p className="profileside">Profile</p>
                </SideNav.Toggle>
                <SideNav.Nav defaultSelected="home">

                    <NavItem eventKey="home">

                        <NavIcon>

                            <img src={user.profile_img ? user.profile_img : 'https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg'} />
                        </NavIcon>
                        <NavText>
                            <p className="userside">{user.username}</p>
                            <p className="sidenav">Email :
              <p className="sidenaav">{user.email}</p>

                            </p>

                            <p className="sidenav">Role :
              <p className="sidenaav"> {user.role}</p>
                            </p>
                            <p className="sidenav">Joined Courses Number :
              <p className="sidenaav">{dashboardCourses.length}</p>
                            </p>
                        </NavText>
                    </NavItem>

                </SideNav.Nav>
            </SideNav>
            <div className="divdash"> Course Info</div>
            <hr className="hrdash"></hr>
            <Button className="detailsbtn3">
                <Link className="detailstxt" to="/dashboard">Back To Dashboard</Link>
            </Button>

            {courseDetial.map(item => {
                return (

                    // <section>

                    //     <img src={item.instructor_img} />
                    //     <br />
                    //     <span>instructor Name: {item.instructor}</span>
                    //     <br />
                    //     <img src={item.img_url} />
                    //     <span>Course Name: {item.course_name}</span>
                    //     <br />
                    //     <span>subject: {item.subject}</span>
                    //     <br />
                    //     <p>description: {item.description}</p>
                    //     <p>Duration: {item.literature_time}</p>
                    //     <p>details: {item.details}</p>
                    //     <p>start Date: {item.start_date}</p>
                    //     <p>room_id: {item.room_id}</p>

                    // </section>
                    <div className="horizental">
                        <Card className="deatailscard" style={{ width: '18rem' }}>
                            <Card.Img className="deatailsimg" variant="top" src={item.img_url} />
                            <Card.Body className="cardbody">
                                <Card.Title className="deatailstitle"> {item.subject}</Card.Title>
                                <Card.Title className="deatailstitle">{item.course_name}</Card.Title>

                                <Card.Text className="deatailstext">
                                    <p className="phor"> Details </p>
                                    {item.details}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    <img className="ins" src={item.instructor_img} />{item.instructor}</ListGroupItem>
                                <ListGroupItem>Literature_Time : {item.literature_time}</ListGroupItem>
                                <ListGroupItem>Start Date : {item.start_date}</ListGroupItem>
                                <ListGroupItem>Room-ID : {item.room_id}</ListGroupItem>

                            </ListGroup>

                        </Card>
                    </div>

                )
            })

            }
            
                <h2 className="hmeeting">Edusavior Meeting</h2>
                <hr className="hrdash"></hr>
                <div className="div2meeet">

                {call ? (<Jutsu
                    roomName={room}
                    password={password}
                    displayName={user.username}
                    onMeetingEnd={() => console.log('Meeting has ended')}
                    loadingComponent={<p>ʕ •ᴥ•ʔ edusavior is loading ...</p>} />)
                    : (
                       
                        <Form className="meetingform">
                            <Form.Row >
                               
                                    <Form.Control placeholder="Room-ID" value={room} onChange={(e) => setRoom(e.target.value)} />
                               
                                    <Form.Control placeholder="Password (optional)" value={password} onChange={(e) => setPassword(e.target.value)}  />
                                <Button className="meetingbttn" onClick={handleClick} type="submit">Start / Join</Button>
                            </Form.Row>
                        </Form>
                       
                    )}
                </div>
            <div>
                <ScrollUpButton />
            </div>
        </>
    );
};


export default withRouter(Details);

