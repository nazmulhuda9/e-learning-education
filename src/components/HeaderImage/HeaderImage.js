import React from 'react';
import './HeaderImage.css'
import logo from '../../images/news_online-education-anyone-removebg-preview.png'

const HeaderImage = () => {
    return (
        <div className='container header-section'>
            <div>
                <h1>E-Learning School And Collage</h1>
                <h4>have you a computer or laptop or mobile? just join with us and learn and learn.....</h4>

                <button type="button" class="btn btn-primary">More Classes</button>

            </div>
            <div className='img'>
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default HeaderImage;