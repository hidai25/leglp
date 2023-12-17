import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
// import logo from '../../assets/images'; // Uncomment if logo is used

const Header = () => {
    return (
        <div className="header">
            <div className="header__inner container">
                <div className="header__logo">
                    {/* <img src={logo} alt="" /> */} {/* Uncomment if logo is used */}
                </div>
                <ul className="header__nav">
                    <li><Link to="/overview">overview</Link></li>
                    <li><Link to="/trailer">trailer</Link></li>
                    <li><Link to="/game">the game</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
