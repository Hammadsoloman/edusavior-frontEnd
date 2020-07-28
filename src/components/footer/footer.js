// import React from 'react';
import './footer.scss';
// import { Link, NavLink } from 'react-router-dom';
// const Footer = (props) => {
//     return (
//         <>
//         <header>
//             <h1>Footer</h1>
//       </header>

//       </>
//     );
//     };


// export default Footer;

import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Image from 'react-bootstrap/Image';


const FooterPagePro = () => {
  return (

    <MDBFooter color="mdb-color" className="font-small lighten-3 pt-4 mt-4">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous"></link>
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="my-4">
          <MDBCol md="4" lg="4">
            <Image className='imgg' src="https://s3.amazonaws.com/designmantic-logos/logos/2020/Jul/medium-1940-5f1eeefc492ad.png" rounded />

            <h5 className="text-uppercase mb-4 font-weight-bold r">
              EDUSAVIOUR
            </h5>

            <p>
              EDUSAVIOUR covers a wide range of academic learning, allowing you to supplement your studies with some additional knowledge.
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2" lg="2" className="ml-auto">
            <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
            <ul className="list-unstyled">
              <p>
                <a href="#!">COURSES</a>
              </p>
              <p>
                <a href="#!">ABOUT US</a>
              </p>
              <p>
                <a href="#!">CONTACT</a>
              </p>
              <p>
                <a href="#!">HELP</a>
              </p>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="5" lg="3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
            <p>
              <i className="fa fa-home mr-3" /> Amman ,JORDAN
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> EDUSAVIOUR@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2" lg="2" className="text-center">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Follow us
            </h5>
            <div className="mt-2 ">
              <a type="button" className="btn-floating btn-small btn-fb">
                <i className="fab fa-facebook-f" />
              </a>
              <a type="button" className="btn-floating btn-small btn-tw">
                <i className="fab fa-twitter" />
              </a>
              <a type="button" className="btn-floating btn-small btn-gplus">
                <i className="fab fa-google-plus" />
              </a>
              <a type="button" className="btn-floating btn-small btn-dribbble">
                <i className="fab fa-dribbble" />
              </a>
            </div>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className='edu' href="https://www.MDBootstrap.com"> EDUSAVIOUR.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;