// Navbar1.js

import React from 'react';
import './navbar1.css'; // Import CSS for additional styling
import logo from "../images/logo.png";
function Navbar1(props) {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={logo} alt="Logo" className="logo" />

            </div>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <div className="location-bar">Location: <span>New York</span></div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Contacts</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Account</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Cart</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar1;
