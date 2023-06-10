import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const NavigationBar = () => {
     const {user} =useContext(AuthContext)
   
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="liht" variant="">

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto ">
                        <Link className='text-decoration-none text-secondary me-4' to='/'>Home</Link>
                        <Link className='text-decoration-none text-secondary me-4' to='/'>About</Link>
                        <Link className='text-decoration-none text-secondary' to='/'>Contact</Link>
                        

                    </Nav>
                    <Nav>

                        <FaUserCircle className='fs-1 me-4'></FaUserCircle>
                        {user ?
                            <Button className='rounded-0 btn btn-dark'>Logout</Button>
                            :
                           <>
                            <Link to='login'><Button className='rounded-0 btn btn-dark'>Login</Button></Link>
                            <Link to='register'><Button className='rounded-0 btn btn-dark ms-2'>Register</Button></Link>
                           </>

                        }
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </Container>
    );
};

export default NavigationBar;