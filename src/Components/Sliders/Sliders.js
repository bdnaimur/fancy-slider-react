import React from 'react';
import Slide from './Slide';

const Sliders = ({slides,items}) => {
    return (
        <div>
            {slides.map(slide=><Slide items={items} slide={slide}></Slide>)}
            <div class="dots d-flex mt-2 w-100 justify-content-center align-items-center bg-light">
                <span class="dot" onclick="changeItem(-1)"></span>
                <span class="dot" onclick="changeItem(1)"></span>
            </div>
        </div>
    );
};

export default Sliders;