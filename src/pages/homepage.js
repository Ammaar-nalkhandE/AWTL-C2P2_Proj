import React from 'react';


import img1 from "../images/offer_homepage.png";
import img2 from "../images/bank_homepage.png";
import "./homepage.css"
import Slideshow from "../components/rotating_imgs";
import Grid from "../components/Popular_categ";
import Navbar2 from "../components/navbar2";
import Grid2 from "../components/shop_by_pets";
function Homepage(props) {
    return (
        <div>
            <Navbar2/>
            <img id={img1} src={img1} alt={"offers_image"}/>
            <img id={img2} src={img2} alt={"offers_image"}/>
            <Slideshow/>
            <h2>Popular Categories</h2>
            <Grid/>
            <h2>Shop By Pets</h2>
            <Grid2/>
        </div>
    );
}


export default Homepage;
