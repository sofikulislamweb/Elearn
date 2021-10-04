import React from 'react';
import { Form } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <Form className='w-75 mx-auto p-4'>
            <h1>Contact Us</h1>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <button className='btn btn-warning'>Send</button>

        </Form>
    );
};

export default ContactUs;