import React from 'react';

import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Leftnav from '../pages/Shared/Leftnav/Leftnav';
import Rightnav from '../pages/Shared/Rightnav/Rightnav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className='mt-5'>
               
                <Row>
                    <Col lg={3}>
                        <Leftnav></Leftnav>
                    </Col>

                    <Col lg={6}><h2>Main content</h2></Col>

                    <Col lg={3}>
                        <Rightnav></Rightnav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Main;