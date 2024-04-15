import React, { useState } from 'react';
import './navbar2.css'; // Import your CSS file for styling

function BelowNavbar() {
    // State to manage dropdown visibility for each item
    const [dropdownVisibility, setDropdownVisibility] = useState({
        cats: false,
        shopByBreed: false,
        catFood: false,
        catLitterSupplies: false,
        // Add more dropdown items and set their initial visibility to false
    });

    // Function to toggle dropdown visibility for a specific item
    const toggleDropdown = (item) => {
        setDropdownVisibility(prevState => {
            const updatedVisibility = {};
            // Close all dropdowns except the one being toggled
            Object.keys(prevState).forEach(key => {
                updatedVisibility[key] = key === item ? !prevState[key] : false;
            });
            return updatedVisibility;
        });
    };

    return (
        <div className="below-navbar">
            <div className="nav-item dropdown" onClick={() => toggleDropdown('cats')}>
                <a href="#">cats</a>
                {dropdownVisibility.cats && (
                    <ul className="dropdown-menu">
                        {/* Add your shop by breed list items here */}
                        <li><a href="#">Cat 1</a></li>
                        <li><a href="#">cat 2</a></li>
                        <li><a href="#">cat 3</a></li>
                    </ul>
                )}
            </div>
            <div className="nav-item dropdown" onClick={() => toggleDropdown('shopByBreed')}>
                <a href="#">Shop By Breed</a>
                {dropdownVisibility.shopByBreed && (
                    <ul className="dropdown-menu">
                        {/* Add your shop by breed list items here */}
                        <li><a href="#">Breed 1</a></li>
                        <li><a href="#">Breed 2</a></li>
                        <li><a href="#">Breed 3</a></li>
                    </ul>
                )}
            </div>
            <div className="nav-item dropdown" onClick={() => toggleDropdown('catFood')}>
                <a href="#">Cat Food</a>
                {dropdownVisibility.catFood && (
                    <ul className="dropdown-menu">
                        {/* Add your cat food list items here */}
                        <li><a href="#">Dry Food</a></li>
                        <li><a href="#">Wet Food</a></li>
                        <li><a href="#">Kitten Food</a></li>
                    </ul>
                )}
            </div>
            <div className="nav-item dropdown" onClick={() => toggleDropdown('catLitterSupplies')}>
                <a href="#">Cat Litter Supplies</a>
                {dropdownVisibility.catLitterSupplies && (
                    <ul className="dropdown-menu">
                        {/* Add your cat litter supplies list items here */}
                        <li><a href="#">Litter</a></li>
                        <li><a href="#">Cleaning & Deodorizers</a></li>
                        <li><a href="#">Litter Boxes & Toilets</a></li>
                    </ul>
                )}
            </div>
            {/* Add more dropdown items with their respective onClick handlers */}
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
