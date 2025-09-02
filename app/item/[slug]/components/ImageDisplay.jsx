'use client';

import Image from 'next/image';
import React, { useState } from 'react';


const ImageDisplay = ({ images }) => {
    console.log(images);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div>
            <Image
                loading='lazy'
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                onClick={handleClick}
                width={300}
                height={300}
                title="Click on picture to see more pictures"
                style={{
                    cursor: 'pointer'
                }}
            />
        </div>
    );
};

export default ImageDisplay;
