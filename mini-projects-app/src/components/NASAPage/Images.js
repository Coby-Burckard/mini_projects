import React from 'react';
import classnames from 'classnames';

const Images = ({ images, handleLoad, checkedImage }) => {
  return (
    <div className="slideshow__slides">
      {images.length > 0 &&
        images.map((image, index) => (
          <div
            className={classnames('slideshow__slide', {
              [`s${checkedImage}`]: index === 0,
            })}
          >
            <img
              className="slideshow__img"
              key={`img_${index}`}
              alt={`img_${index}`}
              src={image}
              onLoad={handleLoad}
            />
          </div>
        ))}
    </div>
  );
};

export default Images;
