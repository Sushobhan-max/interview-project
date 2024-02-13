import React from 'react';

const Navbar = () => {
    function toggleMenu() {
        var menu = document.querySelector('.menu');
        menu.classList.toggle('active');
    }
    
    

    return (
        <div className="navbar">
            <div className='navdiv navdivres'>
                <div>
                    <h5 className='fontrem fontres'><span style={{ color: 'orange' }}>LO</span>GO</h5>
                </div>

                <ul className="menu" >
                    <li><a href="/">Home</a>|</li>
                    <li><a href="/">About Us</a>|</li>
                    <li><a href="/">Services</a>|</li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    );
}

export default Navbar;
