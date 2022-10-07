import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav>
            <div className="nav-container">
                <h2>CarCave</h2>

                <div className='nav-items'>
                    <CustomLink to='/' className='nav-item'>Home</CustomLink>
                    <CustomLink to='/review' className='nav-item'>Review</CustomLink>
                    <CustomLink to='/dashBoard' className='nav-item'>Dash Board</CustomLink>
                    <CustomLink to='/blogs' className='nav-item'>Blogs</CustomLink>
                    <CustomLink to='/about' className='nav-item'>About</CustomLink>
                </div>

                <button onClick={() => setOpen(!open)} className='responsive-bar'>
                    {open ? <AiOutlineClose className='nav-icon' /> : <FaBars className='nav-icon' />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;