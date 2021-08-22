import React from 'react';

const SliderInput = ({iamgeGallery,galleryHeader,handleSlider}) => {
    return (
        <section class="images">
            <div class="justify-content-around align-items-center mt-3 gallery-header mb-2">
                <h3 class="head-title text-center">Select image for create slider</h3>
                <div class="input-group col-md-3 mb-2 mb-md-0">
                    <input class="form-control" id="duration" placeholder="slider change duration"/>
                </div>
                <button onClick={handleSlider} id="create-slider" class="btn btn-primary px-5">Create slider</button>
            </div>
            <div class="row gallery">

            </div>
        </section>
    );
};

export default SliderInput;