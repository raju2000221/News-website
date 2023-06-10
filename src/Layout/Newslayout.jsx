import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Leftnav from '../pages/Shared/Leftnav/Leftnav';
import Rightnav from '../pages/Shared/Rightnav/Rightnav';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Newslayout = () => {
    return (
        <div>
            <Header></Header>
            <Container className='mt-5'>
               
                <Row>
                  

                    <Col lg={9}>
                       
                       <Outlet></Outlet>
                    
                    
                    </Col>

                    <Col lg={3}>
                        <Rightnav></Rightnav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Newslayout;