import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import { startLoadImages } from '../../actions/NASA';
import Images from './Images';

const ImageSlider = () => {
  //initializing
  const dispatch = useDispatch();
  const [loadedImages, setLoadedImages] = useState(0);
  const [checkedImage, setChecked] = useState(0);
  const images = useSelector(state => state.NASA.images);

  //loading images on first render
  useEffect(() => {
    console.log('image slider useEffect triggered');
    if (images.length < 1) {
      dispatch(startLoadImages());
    }
  }, [dispatch, images.length]);

  //handling events
  const handleLoad = () => {
    setLoadedImages(loadedImages + 1);
    console.log('loaded images = ', loadedImages);
  };

  const handleRadioClick = index => () => {
    setChecked(index);
  };

  return (
    <div className="slideshow middle">
      <div className="slideshow__checkinputs">
        {[...Array(5).keys()].map((item, index) => {
          const isChecked = index === checkedImage;
          return (
            <input
              className="slideshow__input"
              type="radio"
              name="r"
              id={`r${index}`}
              onChange={handleRadioClick(index)}
              checked={isChecked}
            />
          );
        })}
        <Images
          images={images}
          checkedImage={checkedImage}
          handleLoad={handleLoad}
          loadedImages={loadedImages}
        />
      </div>

      <div className="slideshow__buttons">
        {[...Array(5).keys()].map((item, index) => {
          return (
            <label
              className={classnames('slideshow__bar', {
                'slideshow__bar--checked': index === checkedImage,
              })}
              for={`r${index}`}
              onClick={handleRadioClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
