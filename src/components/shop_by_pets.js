import React from 'react';
import i1 from "../images/7.png"
import i2 from "../images/8.png"
import i3 from "../images/9.png"
import i4 from "../images/10.png"
import i5 from "../images/11.png"
import i6 from "../images/12.png"
import "./shop_by_pets.css"
const GridItem = ({ image, subtitle }) => (
    <div style={{ margin: '10px', textAlign: 'center' }}>
        <img src={image} alt="Grid item" style={{ width: '100%', height: 'auto' }} />
        <p>{subtitle}</p>
    </div>
);

const Grid2 = () => {
    const gridData = [
        { image: i1, subtitle: 'Subtitle 1' },
        { image: i2, subtitle: 'Subtitle 2' },
        { image: i3, subtitle: 'Subtitle 3' },
        { image: i4, subtitle: 'Subtitle 4' },
        { image: i5, subtitle: 'Subtitle 5' },
        { image: i6, subtitle: 'Subtitle 6' },
    ];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {gridData.map((item, index) => (
                <GridItem key={index} image={item.image} subtitle={item.subtitle} />
            ))}
        </div>
    );
};

export default Grid2;
