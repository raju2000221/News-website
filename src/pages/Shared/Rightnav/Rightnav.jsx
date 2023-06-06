import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png';

const Rightnav = () => {
  return (
    <div>
      <h4 className='fw-bold'>Login With</h4>
      <div className='mt-4'>
        <Button className='w-100 mb-2' variant="outline-secondary"> <FaGoogle /> Login with Google</Button>
        <Button className='w-100' variant="outline-secondary"> <FaGithub /> Login with Github</Button>
      </div>
      <div className='mt-5'>
        <h4 className='fw-bold'>Login With</h4>
        <ListGroup className='mt-4'>
          <ListGroup.Item> <FaFacebook /> Facebook</ListGroup.Item>
          <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
          <ListGroup.Item> <FaInstagram /> Twitter</ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <div className="position-relative mt-3">
        <img className='w-100' src={bg} alt="" />
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
          <h1>Create an Amazing Newspaper</h1>
          <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
          <Button variant="danger rounded-0 p-3">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default Rightnav;
