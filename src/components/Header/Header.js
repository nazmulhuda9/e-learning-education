import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {


    return (
        <div className='header'>
            <Link className='link' to='/home'>Home</Link>
            <Link className='link' to='/classes'>Classes</Link>
            <Link className='link' to='/about'>About us</Link>
            <Link className='link' to='/contact'>Contact us</Link>
        </div>
    );
};

export default Header;