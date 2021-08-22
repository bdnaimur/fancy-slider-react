import React from 'react';

const ShowImage = ({image, selectItem}) => {
    return (
        <div className="col-md-3">
            <img class="img-fluid img-thumbnail" onClick={(event)=>{selectItem(event,image.webformatURL)}} src={image.webformatURL} alt="Images"/>
        </div>
    );
};

export default ShowImage;