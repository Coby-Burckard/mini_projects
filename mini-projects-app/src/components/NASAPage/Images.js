import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import Loading from './Loading';

const Images = ({ images, handleLoad, checkedImage, loadedImages }) => {
  const [loadingPresent, setLoadingPresent] = useState(true);
  const [animateLoading, setAnimateLoading] = useState(false);

  useEffect(() => {
    if (loadedImages >= 4) {
      removeLoading();
    }
  }, [loadedImages]);

  const removeLoading = () => {
    setAnimateLoading(true);
    setTimeout(() => {
      setLoadingPresent(false);
    }, 600);
  };

  return (
    <div className="slideshow__slides">
      {loadingPresent && <Loading animateLoading={animateLoading} />}

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
