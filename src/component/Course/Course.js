import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    const { img, name, Title, price } = props.course;
    console.log(props.course.img);
    return (
        <CardGroup className='col-md-4 g-4 p-2'>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{price} $</Card.Title>
                    <Card.Text>
                        {Title}
                    </Card.Text>
                    <button className='btn btn-warning'>Enroll now</button>
                </Card.Body>
            </Card>
        </CardGroup>
    );
};

export default Course;