import React from 'react';
import './Gallery.css';
import { gallery1, gallery2, gallery3, gallery4, gallery5 } from './import'


const Gallery = () => {
    return (
        <div className="slider-container">
            <div className="image-holder">
            <img src={gallery1} alt="gallery1" />
                <img src={gallery2} alt="gallery2" />
                <img src={gallery3} alt="gallery3" />
                <img src={gallery4} alt="gallery4" />
                <img src={gallery5} alt="gallery5" />
            </div>
        </div>
    );
}

export default Gallery;