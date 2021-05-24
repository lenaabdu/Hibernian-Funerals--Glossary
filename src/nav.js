import React from "react";
import Nav from 'react-bootstrap/Nav';
import Form  from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button  from 'react-bootstrap/Button';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from 'react-bootstrap/Navbar';
import {faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons';
import {faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import { AiOutlineMail } from "react-icons/ai";


class Logo extends React.Component {


render() {
  return (
<Container>

  <Row>
    
    <Col lg={3} md={12}  className="text-center " >
     <img src="/logo10.png" className="d-inline-block  " alt="HIBERNIAN FUNERALS" />
    </Col>
    <Col md={3} > </Col>
    <Col  className="row align-items-center " md={1}  >
      <FontAwesomeIcon icon={faEnvelopeOpenText} size="3x"  style={{color: "#89C35C"}} className=" d-none d-lg-block" /> </Col>
     
     <Col className="row align-items-center" md={1} >   <h6 className=" d-none d-lg-block">  Phone  +35386722881 </h6> </Col><hr/>
     <Col className="row align-items-center" md={1} >
       <FontAwesomeIcon icon={faPhoneSquareAlt} size="3x" className=" d-none d-lg-block" style={{color: "#89C35C"}}/>
      </Col>
      <Col className="row align-items-center" md={1} > <h6 className=" d-none d-lg-block"> Email    mail@mail.com</h6></Col>
 
  
</Row>

 
 </Container>

    );
  }
}

export default Logo;