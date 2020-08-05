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
import Chat from '../chat/chat';
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
    const [allcourses, getCoursses, addCourses, addToDashboard, getCoursesFromDashboard, dashboardCourses] = useCoursses(token);
    useEffect(getCoursesFromDashboard, [])
    let courseDetial = dashboardCourses.filter(i => i._id === match.params.id);
    const handleClick = event => {
        event.preventDefault()
        if (courseDetial[0] && user.username) setCall(true)
    }
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
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
            {/* <Button className="detailsbtn3">
                <Link className="detailstxt" to="/dashboard">Back To Dashboard</Link>
            </Button> */}
            {courseDetial.map(item => {
                return (
                    <div className="horizental">
                            <div className="imgdeataildev">
                            <Card.Img className="deatailsimg" variant="top" src={item.img_url} />
                            </div>
                        <Card className="deatailscard" style={{ width: '18rem' }}>
                            <Card.Body className="cardbody">
                                <Card.Title className="deatailstitle"><span className="spaaaansub">
                                <span className="kkkkkk">Subject : </span>   {item.subject}
                                    </span></Card.Title>
                                    <hr className="qc"/>
                                <Card.Title className="deatailstitle"><span className="spaaaansub">
                                <span  className="kkkkkk">Course : </span> {item.course_name}
                                    </span></Card.Title>
                                    <hr className="qc"/>
                                <Card.Text className="deatailstext">
                                    <p className="phor"> Details </p>
                                    {item.details}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    <img className="ins" src={item.instructor_img} />
                                    <span className="insructorspan">{item.instructor}</span></ListGroupItem>
                                <ListGroupItem>Literature_Time : {item.literature_time}</ListGroupItem>
                                <ListGroupItem>Start Date : {item.start_date}</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </div>
                )
            })
            }
            <h2 className="hmeeting">Edusavior Meeting</h2>
            <hr className="hrdash"></hr>
            <div className="div2meeet">
                {call && courseDetial[0] ? (<Jutsu
                    roomName={courseDetial[0].course_name}
                    password={password}
                    displayName={user.username}
                    onMeetingEnd={() => console.log('Meeting has ended')}
                    loadingComponent={<p>ʕ •ᴥ•ʔ edusavior is loading ...</p>} />)
                    : (
                        <Form className="meetingform">
                            <Form.Row >
                                {/* <Form.Control placeholder="Room-ID" value={room} onChange={(e) => setRoom(e.target.value)} /> */}
                                <Form.Control hidden placeholder="Password (optional)" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <Button className="meetingbttn" onClick={handleClick} type="submit">Start Meeting</Button>
                            </Form.Row>
                        </Form>
                    )}
            <div className="chattttdiv">
            <Chat user={user} courseDetial={courseDetial} />
            </div>
            </div>
            <div>
                <ScrollUpButton />
            </div>
            {/* <a href="https://video-chat.dgurgel.now.sh/">video chat</a> */}
        </>
    );
};
export default withRouter(Details);