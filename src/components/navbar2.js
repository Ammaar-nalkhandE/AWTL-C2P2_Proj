import React, { useState } from 'react';
import './navbar2.css'; // Import your CSS file for styling

function BelowNavbar() {
    // State to manage dropdown visibility
    const [dropdownVisible, setDropdownVisible] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className="below-navbar">
            <div className="nav-item">
                <a href="#">Cats</a>
            </div>
            <div className="nav-item dropdown" onClick={toggleDropdown}>
                <a href="#">Shop By Breed</a>
                {dropdownVisible && (
                    <ul className="dropdown-menu">
                        <li><a href="#">Breed 1</a></li>
                        <li><a href="#">Breed 2</a></li>
                        <li><a href="#">Breed 3</a></li>
                        {/* Add more breeds as needed */}
                    </ul>
                )}
            </div>
            <div className="nav-item">
                <a href="#">Henlo</a>
            </div>
            <div className="nav-item">
                <a href="#">Consult a Vet</a>
            </div>
            <div className="nav-item">
                <a href="#">Pharmacy</a>
            </div>
        </div>
    );
}

export default BelowNavbar;
