import React from "react";
import './footer.css';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const quick__links = [
  { path: "/home", display: "Home" },
  { path: "features", display: "Features" },
  { path: "contactus", display: "ContactUs" },
  { path: "/destination", display: "Destination" },
];

const quick__links2 = [
  { path: "/gallery", display: "Gallery" },
  { path: "login", display: "Login" },
  { path: "register", display: "Register" },
];

const Footer = () => {

const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo1">
              <img src={logo} alt="" />
              <p>  Travel the world with us! Our platform helps you explore amazing destinations, 
                book trips, and share experiences with like-minded travelers. We offer 
                affordable packages and exceptional customer service to ensure a seamless travel experience.</p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#"><i class="ri-google-fill"></i></Link>
                </span>
                <span>
                  <Link to="#"><i className="ri-facebook-circle-line"></i></Link>
                </span>
                <span>
                  <Link to="#"><i className="ri-instagram-line"></i></Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className="footer__link-title">Discover</h5>

            <ListGroup className="footer__quick-links">
               {
               quick__links.map((item,index) => (
               <ListGroupItem Key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className="footer__link-title">Quick Links</h5>

            <ListGroup className="footer__quick-links">
               {
               quick__links2.map((item,index) => (
               <ListGroupItem Key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className="footer__link-title">ContactUs</h5>

           <ListGroup className="footer__quick-links">
   
  
               <ListGroupItem  className="ps-0 border-0 d-flex align-items-centre gap-3">
                <h6 className="mb-0 d-flex align-items-centre gap-2">
                    <span><i class="ri-map-pin-line"></i></span>
                    Address:
                </h6>
                <p className="mb-0">Kathmandu, Nepal</p>
               </ListGroupItem>
                 
               <ListGroupItem  className="ps-0 border-0 d-flex align-items-centre gap-3">
                <h6 className="mb-0 d-flex align-items-centre gap-2">
                    <span><i class="ri-mail-line"></i></span>
                    Email:
                </h6>
                <p className="mb-0">anynomous@gmail.com</p>
               </ListGroupItem>

               <ListGroupItem  className="ps-0 border-0 d-flex align-items-centre gap-3">
                <h6 className="mb-0 d-flex align-items-centre gap-2">
                    <span><i class="ri-phone-fill"></i></span>
                    Phone:
                </h6>
                <p className="mb-0">+977 9800000000</p>
               </ListGroupItem>
             </ListGroup>
          </Col>

          <Col lg='12' className="text-centre pt-5">
           <p className="copyright">Copyright {year}, design and develop by anonymous user. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
