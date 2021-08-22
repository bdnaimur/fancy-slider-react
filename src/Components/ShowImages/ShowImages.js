import React from 'react';
import ShowImage from './ShowImage';

const ShowImages = ({images, selectItem}) => {

    return (
        <div className="row">
            {images.map(image =><ShowImage selectItem={selectItem} image={image}></ShowImage>)}
        </div>
    );
};

export default ShowImages;