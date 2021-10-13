import React from 'react';
import './AboutUs.css'
import logo from '../../images/overcoming-3-major-sales-enablement-challenges.jpg'

const AboutUs = () => {

    return (
        <div className='d-flex'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='ms-5 '>
                <h2 className='text-primary p-4 about'>E-Learning Education</h2>
                <h4 className='p-4'>12 Instructor now teaching 12 Subject.</h4>
                <p className='fw-bold m-4'>Our course mainly focused Higher Secondary Syllabus. We always try to best service. we will start new many classes very soon.  </p>

            </div>
        </div>
    );
};

export default AboutUs;