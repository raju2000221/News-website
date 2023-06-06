import React from 'react';
import logo from '../../../assets/logo.png'
import user from '../../../assets/1.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className='text-center mt-5'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D YYYY, h:mm:ss a")}</p>
            </div>
            <div className='d-flex bg-secondary'>
                <Button variant="danger rounded-0">Latest</Button>
                <Marquee className='text-white'>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="liht" variant="">
                
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                           
                        </Nav>
                        <Nav>
                            <img className='rounded-circle' src="#" alt="" />
                           <Button className='rounded-0 btn btn-dark'>Login</Button>
                        </Nav>
                    </Navbar.Collapse>
               
            </Navbar>
        </Container>
    );
};

export default Header;