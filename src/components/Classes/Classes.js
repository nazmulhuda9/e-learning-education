import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('./classdata.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-danger p-3 border-bottom'>Available Only Higher Secondary Class</h2>
            <div className='home container'>

                {
                    classes.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Classes;