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
          
        </Container>
    );
};

export default Header;