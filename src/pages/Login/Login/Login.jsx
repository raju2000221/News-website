import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='w-25 max-auto mt-5'>
            <h2>Please Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Link></Link>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-danger ms-5">
                Don't have an account ? <Link to="/register"> register now</Link>
                    </Form.Text>
            </Form>
            <Form.Text className="text-danger">
                        We'll never share your email with anyone else.
                    </Form.Text>
        </Container>
    );
};

export default Login;