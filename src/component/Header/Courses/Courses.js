import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='row mx-2'>
            <h1 className='text-warning text-center'>Our All Courses</h1>
            <p className='text-center'>Quick Enroll and get worldclass course</p>
            {
                courses.map(course => <Course course={course}></Course>)
            }

        </div>
    );
};

export default Courses;