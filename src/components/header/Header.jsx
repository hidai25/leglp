import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import './header.scss';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = (toggled) => {
        setIsMobileMenuOpen(toggled);
    };

    return (
        <div className="header">
            <div className="header__inner container">
                <div className="header__logo">
                    {/* <img src={logo} alt="Logo" /> */}
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="header__hamburger">
                    <Hamburger toggled={isMobileMenuOpen} toggle={toggleMobileMenu} />
                </div>

                {/* Mobile Navigation Links */}
                {isMobileMenuOpen && (
                    <ul className="header__nav--mobile">
                        <li><Link to="/overview" onClick={() => setIsMobileMenuOpen(false)}>Overview</Link></li>
                        <li><Link to="/trailer" onClick={() => setIsMobileMenuOpen(false)}>Trailer</Link></li>
                        <li><Link to="/game" onClick={() => setIsMobileMenuOpen(false)}>The Game</Link></li>
                    </ul>
                )}

                {/* Regular Web Navigation Links */}
                <ul className="header__nav">
                    <li><Link to="/overview">Overview</Link></li>
                    <li><Link to="/trailer">Trailer</Link></li>
                    <li><Link to="/game">The Game</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
