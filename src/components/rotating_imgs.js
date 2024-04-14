import React, { useState, useEffect } from 'react';
import './rotating_imgs.css'; // Import CSS for styling
import i1 from "./image1.png"
import i2 from "./image2.png"
import i3 from "./image3.png"
function Slideshow() {
    const [slideIndex, setSlideIndex] = useState(0);

    // Array containing paths to your images
    const images = [
        i1,
        i2,
        i3
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // Change image every 10 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="slideshow-container">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={index === slideIndex ? 'mySlides fade show' : 'mySlides'}
                >
                    <img src={image} alt={`i${index + 1}`} />
                </div>
            ))}
        </div>
    );
}

export default Slideshow;
