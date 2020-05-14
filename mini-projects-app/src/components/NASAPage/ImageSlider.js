import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import { startLoadImages } from '../../actions/NASA';
import Images from './Images';

const ImageSlider = () => {
  //hooks
  const dispatch = useDispatch();

  //loading images on first render
  useEffect(() => {
    if (images.length < 1) {
      dispatch(startLoadImages());
    }
    setLoadedImages(0);
  }, [dispatch, images.length]);

  //initializing component variables
  const [loadedImages, setLoadedImages] = useState(0);
  const [checkedImage, setChecked] = useState(0);
  const images = useSelector(state => state.NASA.images);

  //handling events
  const handleLoad = () => {
    console.log('loaded images = ', loadedImages);
    setLoadedImages(loadedImages + 1);
  };

  const handleRadioClick = index => () => {
    setChecked(index);
  };

  return (
    <div className="slideshow middle">
      <div className="slideshow__checkinputs">
        {[...Array(5).keys()].map((item, index) => {
          const isChecked = index === checkedImage;
          console.log(isChecked);
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
          handleLoad={handleLoad}
          checkedImage={checkedImage}
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
