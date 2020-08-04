import React from 'react';
import '../aboutus/aboutus.scss';
import { Link, withRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cookie from 'react-cookies';
import useCoursses from '../../hooks/coursses/coursses';
// import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';

import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import Carousel from 'react-bootstrap/Carousel';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Image from 'react-bootstrap/Image';
// ---
import { MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
const Aboutus = (props) => {
    const token = cookie.load('auth');
    const [allcourses, getCoursses, addCourses, addToDashboard, getCoursesFromDashboard, dashboardCourses, delteCourse, toggleShow] = useCoursses(token);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    useEffect(getCoursses, []);


    return (
        <>

            {/* ----------our history----------------- */}
            <div className="ourhistory">
                <img className="ourhistoryimg" src="http://keenitsolutions.com/products/html/edulearn/edulearn-demo/images/about/history.jpg" alt="" />
                <div className="ourhistoryph2">
                    <div className="titleaboutus">
                        <h2 className="h2ourhistory">OUR HISTORY</h2>
                        {/* <hr className="hrourhistory"></hr> */}
                    </div>
                    <p className="pourhistory p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe derit in voluptate velit esse cillum.
                    </p>
                    <p className="pourhistory">
                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot fore see the pain and trouble that are bound to belongs to who fail in their duty.
                    </p>
                </div>
            </div>
            {/* ----------our Mission----------------- */}
            <div className="backcolorourmission">
                <div className="ourmission">
                    <div className="ourmissionph2">
                        <div className="titleaboutus">
                            <h2 className="h2ourmission">OUR MISSION</h2>
                        </div>
                        <p className="pourmission p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe derit in voluptate velit esse cillum.
                    </p>
                        <p className="pourmission">
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot fore see the pain and trouble that are bound to belongs to who fail in their duty.
                    </p>
                    </div>

                    <div className="imgourmission1">
                        <img className="ourmissionimg1" src="http://keenitsolutions.com/products/html/edulearn/edulearn-demo/images/about/mission2.jpg" alt="" />
                    </div>
                    <div className="imgourmission2">
                        <img className="ourmissionimg2" src="http://keenitsolutions.com/products/html/edulearn/edulearn-demo/images/about/mission1.jpg" alt="" />
                    </div>

                </div>
            </div>
            {/* ----------our vision----------------- */}
            <div className="ourhistory">
                <img className="ourhistoryimg" src="https://www.thechemicalengineer.com/media/15295/uk-graduates.jpg?width=960" alt="" />
                <div className="ourhistoryph2">
                    <div className="titleaboutus">
                        <h2 className="h2ourhistory">OUR VISION</h2>
                        {/* <hr className="hrourhistory"></hr> */}
                    </div>
                    <p className="pourhistory p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe derit in voluptate velit esse cillum.
                    </p>
                    <p className="pourhistory">
                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot fore see the pain and trouble that are bound to belongs to who fail in their duty.
                    </p>
                </div>
            </div>
            {/* ------------------------------------- */}
            {/* <div className="backcolorourmission">
                <div className="aboutusmap">
                    <div className="ourmissionph2map">
                        <div className="titleaboutus">
                            <h2 className="h2ourmission">CONTACT US</h2>
                        </div>
                        <p className="pourmission p2"> <i className="fa fa-home mr-3" /> Amman ,JORDAN </p>
                        <p className="pourmission">
                            <i className="fa fa-envelope mr-3" /> EDUSAVIOUR@gmail.com</p>
                        <p className="pourmission">
                            <i className="fa fa-phone mr-3" /> + 01 234 567 88 </p>
                        <p className="pourmission">
                            <i className="fa fa-print mr-3" /> + 01 234 567 89</p>
                            
                    </div>

                    <div className="imgourmission1">
                        <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20jordan,%20Amman+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="This is a unique title" className="ourmissionimgmap" />

                    </div>
                </div>
            </div> */}

            {/* ----------------------------------------------------------------- */}
            
 
            <section class="speakers-section">
        {/* <div class="parallax-scene parallax-scene-2 anim-icons">
            <span data-depth="0.40" class="parallax-layer icon icon-circle-5"></span>
            <span data-depth="0.99" class="parallax-layer icon icon-circle-5"></span>
        </div> */}

        <div class="container2">
        <div className="titleteams">
                            <h2 className="h2ourmission">OUR TEAM</h2>
                        </div>
            {/* <div class="sec-title light text-center">
                {/* <span class="title">Our Team</span> */}
                {/* <h2>OUR TEAM</h2>
            </div> */}

            <div class="row1">
          
                <div class="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image"><img className="imgteams" src="https://avatars1.githubusercontent.com/u/60567322?s=400&u=3cdfef081f890e66770666772ef5dea707e0a9d8&v=4" alt=""/>
                                <div class="social-links">
                                    <ul className="ulourteams">
                                    <li><a href="https://www.facebook.com/amal.m.almomani"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://twitter.com/Amalalmomani"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/amal-almomani-32a743178/"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="https://github.com/AmalMAlmomani"><i class="fab fa-github"></i></a></li> 
                                    </ul>
                                </div>
                            </figure>
                        </div>
                        <div class="caption-box">
                            <h4 class="name"><a href="#">Amal Almomani</a></h4>
                            <span class="designation">full stack developer</span>
                        </div>
                    </div>
                </div>

                <div class="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image"><img className="imgteams" src="https://avatars3.githubusercontent.com/u/60567599?s=400&u=7da6f2afc17b2b5637e042e51ff3ac371903803b&v=4" alt=""/>
                                <div class="social-links">
                                    <ul className="ulourteams">
                                    <li><a href="https://web.facebook.com/osama.mousa.92754/"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://twitter.com/OsamaMo71089566?fbclid=IwAR2BiQ25daZYrSDwcfIYcD2uVITZbsy_orCA-JgibS-40b0i1wTj61mdZMg"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/osamamousa/"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="https://github.com/osamamousa204"><i class="fab fa-github"></i></a></li>
                                    </ul>
                                </div>
                            </figure>
                        </div>
                        <div class="caption-box">
                            <h4 class="name"><a href="#">Osama Mousa</a></h4>
                            <span class="designation">full stack developer</span>
                        </div>
                    </div>
                </div>
           
                <div class="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image"><img className="imgteams" src="https://files.slack.com/files-pri/TNGRRLUMA-F017RM5UPL7/60567650.jpg" alt=""/>
                                <div class="social-links">
                                    <ul className="ulourteams">
                                    <li><a href="https://www.facebook.com/reham.omar.562"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/reham-al-sobh-6a61931a2/"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="https://github.com/Reham-Omar"><i class="fab fa-github"></i></a></li>
                                    </ul>
                                </div>
                            </figure>
                        </div>
                        <div class="caption-box">
                            <h4 class="name"><a href="#">Reham Al-Sobh</a></h4>
                            <span class="designation">full stack developer</span>
                        </div>
                    </div>
                </div>

         
                <div class="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image"><img className="imgteams" src="https://avatars2.githubusercontent.com/u/60566997?s=400&u=d82ee2baf37541cf09f540dabbf1e56b5a65a544&v=4" alt=""/>
                                <div class="social-links">
                                    <ul className="ulourteams">
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="www.linkedin.com/in/hammad95"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="https://github.com/Hammadsoloman"><i class="fab fa-github"></i></a></li>
                                    </ul>
                                </div>
                            </figure>
                        </div>
                        <div class="caption-box">
                            <h4 class="name"><a href="#">Hammad Ali</a></h4>
                            <span class="designation">full stack developer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>

    );


}
export default withRouter(Aboutus);


