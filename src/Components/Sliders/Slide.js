import React from 'react';

const Slide = ({slide,items}) => {
    return (
        <div class="slider-item">
            <img className="w-100" src={slide} alt="slide-Img" srcset="" />
        </div>
    );
};

export default Slide;