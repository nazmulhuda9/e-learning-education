import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'


const Footer = () => {
    const element = <FontAwesomeIcon icon={faCoffee} />

    return (
        <div className='d-flex  justify-content-around bg-dark text-white p-3'>
            <div className='text-white fs-3'>
                <h2 className=''>E-Online School</h2>
                <div>
                    <i class="fab fa-facebook-square me-4 "></i>
                    <i class="fab fa-instagram-square m-4"></i>
                    <i class="fab fa-twitter-square m-3 "></i>
                    <i class="fab fa-youtube-square ms-4"></i>
                </div>
            </div>

            <div>
                <h5>Support</h5>
                <p>Contact Us</p>
                <p>FAQ</p>
                <p>About us</p>
            </div>

            <div className=''>
                <input type="text" name="" id="" placeholder='enter your email' />
                <br />
                <button type="button" className="btn btn-danger mt-2">Log in</button>

            </div>

        </div>
    );
};

export default Footer;