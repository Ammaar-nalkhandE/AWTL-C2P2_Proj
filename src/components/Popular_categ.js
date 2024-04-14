import React from 'react';

const GridItem = ({ image, subtitle }) => (
    <div style={{ margin: '10px', textAlign: 'center' }}>
        <img src={image} alt="Grid item" style={{ width: '100%', height: 'auto' }} />
        <p>{subtitle}</p>
    </div>
);

const Grid = () => {
    const gridData = [
        { image: 'image1.jpg', subtitle: 'Subtitle 1' },
        { image: 'image2.jpg', subtitle: 'Subtitle 2' },
        { image: 'image3.jpg', subtitle: 'Subtitle 3' },
        { image: 'image4.jpg', subtitle: 'Subtitle 4' },
        { image: 'image5.jpg', subtitle: 'Subtitle 5' },
        { image: 'image6.jpg', subtitle: 'Subtitle 6' },
    ];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {gridData.map((item, index) => (
                <GridItem key={index} image={item.image} subtitle={item.subtitle} />
            ))}
        </div>
    );
};

export default Grid;
